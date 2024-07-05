import { Image, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import Sprite from "@/lib/Sprite";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useMainContextProvider } from "@/hooks/MainContextProvider";

interface Props {
  sprite: Sprite;
  canvasArea: { width: number; height: number };
}

const getOrigin = (canvasArea: { width: number; height: number }) => {
  return {
    x: canvasArea.width / 2,
    y: canvasArea.height / 2,
  };
};

const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

const convertToXYCoordinates = (
  translationX: number,
  translationY: number,
  canvasArea: { width: number; height: number },
  spriteSize: number
) => {
  const origin = getOrigin(canvasArea);
  const size = spriteSize / 2;
  return {
    x: translationX - origin.x + size,
    y: translationY - origin.x + size,
  };
};

const SpriteView = ({ sprite, canvasArea }: Props) => {
  const spriteSize = sprite.getSize();
  const { sprites, setSprites } = useMainContextProvider();

  const styles = useRef(
    StyleSheet.create({
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        transform: [
          {
            rotate: `${sprite.getDirection().toString()}deg`,
          },
        ],
      },
      container: {
        zIndex: sprites.length - sprites.indexOf(sprite),
        position: "absolute",
        width: sprite.getSize(),
        height: sprite.getSize(),
      },
    })
  ).current;

  const translationX = useSharedValue(sprite.getX());
  const translationY = useSharedValue(sprite.getY());
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const initializeTranslations = () => {
    const origin = getOrigin(canvasArea);
    translationX.value = origin.x + sprite.getX() - spriteSize / 2;
    translationY.value = origin.y + sprite.getY() - spriteSize / 2;
  };

  useEffect(() => {
    initializeTranslations();
  }, [canvasArea]);

  const updateState = ({ x, y }: { x: number; y: number }) => {
    setSprites((prevSprites) =>
      prevSprites.map((s) => {
        if (
          s.getId() === sprite.getId() &&
          (s.getX() !== x || s.getY() !== y)
        ) {
          s.setX(x);
          s.setY(y);
        }
        return s;
      })
    );
  };

  const pan = Gesture.Pan()
    .minDistance(5)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
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
      { translateX: translationX.value },
      { translateY: translationY.value },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.container, animatedStyles]}>
        <Image style={styles.image} source={sprite?.getIcon()} />
      </Animated.View>
    </GestureDetector>
  );
};

export default SpriteView;
