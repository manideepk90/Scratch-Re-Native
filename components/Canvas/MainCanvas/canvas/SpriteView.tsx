import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Sprite from "@/lib/Sprite";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import { clamp, convertToXYCoordinates, getOrigin } from "@/utils/utils";

interface Props {
  sprite: Sprite;
  canvasArea: { width: number; height: number };
}

const SpriteView = ({ sprite, canvasArea }: Props) => {
  const [spriteSize, setSpriteSize] = useState(sprite.getSize());
  const { sprites, setSprites, setSelectedSprite, selectedSprite } =
    useMainContextProvider();
  const [isInited, setIsInited] = useState(false);
  const styles = useMemo(() => {
    return StyleSheet.create({
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
      },
      container: {
        zIndex: sprites.length - sprites.indexOf(sprite),
        position: "absolute",
      },
    });
  }, [sprites]);
  const origin = getOrigin(canvasArea);
  const translationX = useSharedValue(sprite.getX());
  const translationY = useSharedValue(sprite.getY());
  const prevTranslationX = useSharedValue(sprite.getX());
  const prevTranslationY = useSharedValue(sprite.getY());
  const direction = useSharedValue(sprite.getDirection());

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    translationX.value = origin.x + sprite.getX() - spriteSize / 2;
    translationY.value = origin.y + sprite.getY() - spriteSize / 2;
    prevTranslationX.value = translationX.value;
    prevTranslationY.value = translationY.value;
  }, [sprite.getX(), sprite.getY()]);

  const handleSelectedSprite = () => {
    if (sprite.getId() === selectedSprite?.getId()) return;
    setSelectedSprite(sprite);
  };

  const initializeTranslations = () => {
    if (isInited) return;

    if (origin.x === 0 && origin.y === 0) return;
    translationX.value = origin.x + sprite.getX() - spriteSize / 2;
    translationY.value = origin.y + sprite.getY() - spriteSize / 2;
    prevTranslationX.value = translationX.value;
    prevTranslationY.value = translationY.value;
    setIsInited(true);
  };

  useEffect(() => {
    initializeTranslations();
  }, [canvasArea]);

  const updateState = ({ x, y }: { x: number; y: number }) => {
    setSprites((prevSprites) =>
      prevSprites.map((s) => {
        if (s.getId() === sprite.getId()) {
          s.setX(x);
          s.setY(y);
        }
        return s;
      })
    );
  };

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
      handleSelectedSprite();
      setIsDragging(true);
    })
    .onUpdate((event) => {
      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        0,
        canvasArea.width - spriteSize
      );
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        0,
        canvasArea.height - spriteSize
      );
    })
    .onEnd(() => {
      setIsDragging(false);
      updateState(
        convertToXYCoordinates(
          translationX.value,
          translationY.value,
          canvasArea,
          spriteSize
        )
      );
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: isDragging
          ? translationX.value
          : withTiming(translationX.value),
      },
      {
        translateY: isDragging
          ? translationY.value
          : withTiming(translationY.value),
      },
      {
        rotate: `${direction.value}deg`,
      },
    ],

    width: withTiming(spriteSize, { duration: 150 }),
    height: withTiming(spriteSize, { duration: 150 }),
  }));

  useEffect(() => {
    direction.value = sprite.getDirection();
    setSpriteSize(sprite.getSize());
  }, [sprite.getDirection(), sprite.getSize()]);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.container, animatedStyles]}>
        {sprite?.getMessage() && (
          <View
            style={{
              position: "absolute",
              top: -30,
              right: -60,
              height: 30,
            }}
          >
            <View
              style={{
                borderRadius: 50,
                borderWidth: 0.5,
                padding: 5,
                position: "relative",
              }}
            >
              {sprite?.getThinking() ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: -12,
                    left: -10,
                    width: 10,
                    height: 20,
                    transform: [
                      {
                        rotate: "50deg",
                      },
                    ],
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: 600 }}>o</Text>
                </View>
              ) : (
                <View
                  style={{
                    position: "absolute",
                    borderWidth: 0.5,
                    bottom: -10,
                    left: -9,
                    width: 10,
                    height: 20,
                    borderBottomEndRadius: 15,
                    borderBottomStartRadius: 0,
                    borderTopWidth: 0,
                    transform: [
                      {
                        rotate: "50deg",
                      },
                    ],
                  }}
                ></View>
              )}
              <Text>{sprite?.getMessage()}</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={handleSelectedSprite} activeOpacity={1}>
          <View>
            <Image style={styles.image} source={sprite?.getIcon()} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
};

export default SpriteView;
