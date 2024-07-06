import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
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
import DraggableFlatList from "react-native-draggable-flatlist";
import { deleteIcon } from "@/constants/icons";
import Confirmation from "@/components/Confirmation/Confirmation";

interface Props {
  action: Action;
  canvasArea: { width: number; height: number };
}

const ActionView = ({ action, canvasArea }: Props) => {
  const { selectedSprite, setSprites } = useMainContextProvider();
  const [isInited, setIsInited] = useState(false);

  const translationX = useSharedValue(action.getX() || 0);
  const translationY = useSharedValue(action.getY() || 0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);
  const [inputOpen, setInputOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const initializeTranslations = () => {
    if (isInited) return;

    const origin = getOrigin(canvasArea);
    if (origin.x === 0 && origin.y === 0) return;

    translationX.value = origin.x + action.getX() - action.getWidth() / 2;
    translationY.value = origin.y + action.getY() - action.getHeight() / 2 - 60;
    prevTranslationX.value = translationX.value;
    prevTranslationY.value = translationY.value;
    setIsInited(true);
  };

  useEffect(() => {
    initializeTranslations();
  }, [canvasArea, initializeTranslations]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        label: {
          width: "100%",
          textAlign: "center",
          fontSize: 18,
          alignItems: "center",
          justifyContent: "center",
        },
        container: {
          backgroundColor: action.getColor() || "#FAFAAA",
          width: action.getWidth(),
          height: action.getHeight(),
          padding: 5,
          borderRadius: 4,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: action.getZIndex(),
        },
        itemsContainer: {
          backgroundColor: "#FFF",
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
      }),
    [
      action.getHeight(),
      action.getWidth(),
      action.getColor(),
      action.getZIndex(),
    ]
  );

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

  const handleZIndexChange = () => {
    setSprites((prev) =>
      prev.map((sprite) => {
        if (sprite.getId() === selectedSprite?.getId()) {
          sprite.getActions().map((s) => {
            if (s.getId() === action.getId()) {
              s.setZIndex(1200);
            } else {
              s.setZIndex(10);
            }
          });
        }
        return sprite;
      })
    );
  };

  const handleDelete = () => {
    setConfirmation(false);
    setSprites((prev) =>
      prev.map((sprite) => {
        if (sprite.getId() === selectedSprite?.getId()) {
          sprite.setActions(
            sprite.getActions().filter((s) => s.getId() !== action.getId())
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
      handleZIndexChange();
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
        canvasArea.height - action.getHeight() - 60
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
        value={action.getName()}
        setValue={handleNameChange}
      />
      <Confirmation
        open={confirmation}
        handleClose={setConfirmation}
        handleConfirm={handleDelete}
        title={`Do you really want to delete ${action.getName()}?`}
      />
      <GestureDetector gesture={pan}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setInputOpen(true)}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.label}>{action.getName()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setConfirmation(true)}
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Image source={deleteIcon} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      </GestureDetector>
      <Line horizontal />
      {/* <ScrollView contentContainerStyle> */}
      <View style={styles.itemsContainer}>
        <DraggableFlatList
          containerStyle={{ height: "100%", width: "100%" }}
          data={[...action.getMethods()] as any}
          renderItem={({
            item,
            drag,
            isActive,
          }: {
            item: Action;
            drag: any;
            isActive: boolean;
          }) => {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
                onLongPress={drag}
              >
                <ActionsItem {...item} disabled={true} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item: any, index) => item.id || index.toString()}
          onDragEnd={({ data }) => {
            setSprites((prev) => {
              return prev.map((sprite) => {
                if (sprite.getId() === selectedSprite?.getId()) {
                  sprite.getActions().map((ac) => {
                    if (ac.getId() === action.getId()) {
                      ac.setMethods(data);
                    }
                    return ac;
                  });
                }
                return sprite;
              });
            });
          }}
        />
      </View>
    </Animated.View>
  );
};

export default ActionView;
