import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { clamp } from "@/utils/utils";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Sprite from "@/lib/Sprite";

interface Props {
  label?: string;
  value?: string | undefined;
  setValue?: (value: string | undefined) => void;
  type?: string;
  endLabel?: string;
  children?: any;
  input?: number;
  label2?: string;
  value2?: string | undefined;
  setValue2?: (value: string | undefined) => void;
  isInput?: boolean;
  endLabelMiddle?: string;
  canvasArea?: { width: number; height: number };
}

const ActionsItem = ({
  label = "",
  label2 = "",
  type = "text",
  input = 1,
  value: value1,
  endLabel = "",
  setValue,
  value2,
  setValue2,
  isInput = true,
  endLabelMiddle,
  canvasArea,
  action,
  disabled = false,
}: any) => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const { setSprites, selectedSprite } = useMainContextProvider();

  const checkAction = async (x: number, y: number) => {
    setSprites((prev) => {
      return prev.map((sprite: Sprite) => {
        if (sprite.getId() === selectedSprite?.getId()) {
          sprite.getActions().map((ac) => {
            const width = ac.getWidth();
            const height = ac.getHeight();
            const x1 = ac.getX();
            const y1 = ac.getY();
            if (x > x1 && x < x1 + width && y > y1 && y < y1 + height + 50) {
              ac.addFunction(action);
            }
            return ac;
          });
        }
        return sprite;
      });
    });
  };

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {})
    .onUpdate((event) => {
      translationX.value = clamp(
        event.translationX,
        -35,
        canvasArea?.width - 100
      );
      translationY.value = clamp(
        event.translationY,
        -canvasArea?.height + 40,
        canvasArea?.height
      );
    })
    .onEnd((e) => {
      const y = canvasArea?.height + translationY.value - 40;
      const x = translationX.value + 35;
      translationX.value = 0;
      translationY.value = 0;
      setTimeout(() => {
        checkAction(x, y);
      }, 100);
    })
    .runOnJS(true);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
    ],
  }));

  return disabled ? (
    <View style={styles.container}>
      <Text style={styles.actionLabel}>{label}</Text>
      {isInput && (
        <TextInput
          style={styles.textInput}
          value={value1?.toString()}
          onChangeText={(e: any) => {
            setValue && setValue(e);
          }}
          keyboardType={type === "text" ? "ascii-capable" : "numeric"}
        />
      )}
      {endLabelMiddle && (
        <Text style={styles.actionLabel}>{endLabelMiddle}</Text>
      )}

      {input === 2 ? (
        <>
          <Text style={styles.actionLabel}>{label2} </Text>
          <TextInput
            style={styles.textInput}
            value={value2?.toString()}
            onChangeText={(e: any) => {
              setValue && setValue(e);
            }}
            keyboardType={type === "text" ? "ascii-capable" : "numeric"}
          />
        </>
      ) : null}
      <Text style={styles.actionLabel}>{endLabel}</Text>
    </View>
  ) : (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.container, animatedStyles]}>
        <Text style={styles.actionLabel}>{label}</Text>
        {isInput && (
          <TextInput
            style={styles.textInput}
            value={value1?.toString()}
            onChangeText={(e: any) => {
              setValue && setValue(e);
            }}
            keyboardType={type === "text" ? "ascii-capable" : "numeric"}
          />
        )}
        {endLabelMiddle && (
          <Text style={styles.actionLabel}>{endLabelMiddle}</Text>
        )}

        {input === 2 ? (
          <>
            <Text style={styles.actionLabel}>{label2} </Text>
            <TextInput
              style={styles.textInput}
              value={value2?.toString()}
              onChangeText={(e: any) => {
                setValue && setValue(e);
              }}
              keyboardType={type === "text" ? "ascii-capable" : "numeric"}
            />
          </>
        ) : null}
        <Text style={styles.actionLabel}>{endLabel}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default ActionsItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    gap: 5,
    maxHeight: 40,
    backgroundColor: "#FFAB19",
    padding: 5,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    zIndex: 5000,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textInput: {
    minWidth: 40,
    backgroundColor: "white",
    borderRadius: 100,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
