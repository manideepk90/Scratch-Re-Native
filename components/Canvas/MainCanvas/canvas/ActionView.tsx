import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Action from "@/lib/Action";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Line from "@/components/UtilComponent/VerticalLine";
import { clamp, convertToXYCoordinates, getOrigin } from "@/utils/utils";
import InputBox from "@/components/Confirmation/InputBox";
import ActionsItem from "../../Components/ActionsItem";

interface props {
  action: Action;
  canvasArea: { width: number; height: number };
}

const ActionView = ({ action, canvasArea }: props) => {
  const { selectedSprite, setSprites } = useMainContextProvider();
  const [isInited, setIsInited] = useState(false);

  const translationX = useSharedValue(action.getX() || 0);
  const translationY = useSharedValue(action.getY() || 0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);
  const [inputOpen, setInputOpen] = useState(false);
  const initializeTranslations = () => {
    if (isInited) return;

    const origin = getOrigin(canvasArea);
    if (origin.x === 0 && origin.y === 0) return;

    translationX.value = origin.x + action.getX() - action.getWidth() / 2;
    translationY.value = origin.y + action.getY() - action.getHeight() / 2;
    prevTranslationX.value = translationX.value;
    prevTranslationY.value = translationY.value;
    setIsInited(true);
  };

  useEffect(() => {
    initializeTranslations();
  }, [canvasArea]);

  const styles = StyleSheet.create({
    label: {
      width: "100%",
      textAlign: "center",
      fontSize: 18,
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      backgroundColor: action.getColor() || "#FAFAAA",
      width: action.getWidth() | 100,
      height: action.getHeight() | 100,
      padding: 5,
      borderRadius: 4,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: action.getZIndex() || 0,
    },
    itemsContainer: {
      flex: 1,
      backgroundColor: "#FFF",
    },
  });

  const handleNameChange = (name: string) => {
    setSprites((prev) =>
      prev.map((sprite) => {
        if (sprite.getId() === selectedSprite?.getId()) {
          const actions = sprite.getActions();
          sprite.setActions(
            actions.map((s) => {
              if (s.getId() === action.getId()) {
                s.setName(name);
              }
              return s;
            })
          );
        }
        return sprite;
      })
    );
  };

  const pan = Gesture.Pan()
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
      setSprites((prev) =>
        prev.map((sprite) => {
          if (sprite.getId() === selectedSprite?.getId()) {
            const actions = sprite.getActions();
            sprite.setActions(
              actions.map((s, index) => {
                if (s.getId() === action.getId()) {
                  s.setZIndex(actions.length + index);
                } else {
                  s.setZIndex(actions.length - index);
                }
                return s;
              })
            );
          }
          return sprite;
        })
      );
    })
    .onUpdate((event) => {
      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        0,
        canvasArea.width - action.getWidth()
      );
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        0,
        canvasArea.height - action.getHeight()
      );
    })
    .onEnd(() => {
      setSprites((prev) =>
        prev.map((sprite) => {
          if (sprite.getId() === selectedSprite?.getId()) {
            const actions = sprite.getActions();
            sprite.setActions(
              actions.map((s) => {
                if (s.getId() === action.getId()) {
                  const coordinates = convertToXYCoordinates(
                    translationX.value,
                    translationY.value,
                    canvasArea,
                    action.getSize(),
                    action.getWidth() / 2,
                    action.getHeight() / 2
                  );
                  s.setX(coordinates.x);
                  s.setY(coordinates.y);
                }
                return s;
              })
            );
          }
          return sprite;
        })
      );
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <InputBox
        open={inputOpen}
        handleClose={setInputOpen}
        // handleConfirm={() => {}}
        value={action.getName()}
        setValue={handleNameChange}
      />
      <GestureDetector gesture={pan}>
        <TouchableOpacity
          onPress={() => {
            setInputOpen(true);
          }}
        >
          <Text style={styles.label}>{action.getName()}</Text>
        </TouchableOpacity>
      </GestureDetector>
      <Line horizontal />
      <View style={styles.itemsContainer}>
        {action.getMethods().map((item: any, index: number) => (
          <ActionsItem key={index} {...item} />
        ))}
      </View>
    </Animated.View>
  );
};

export default ActionView;
