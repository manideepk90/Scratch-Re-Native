import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

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
  setSelectedAction?: any;
  action: any;
  selectedAction?: any;
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
  setSelectedAction,
  selectedAction,
  action,
}: Props) => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const [value, setCanvas] = useState({ width: 10, height: 10 });
  const handleLayout = (event: any) => {
    const { x, y } = event.nativeEvent.layout;
    setCanvas({ width: x, height: y });
  };

  const pan = Gesture.Pan()
    .onStart(() => {
      if (Object.keys(selectedAction || {}).length === 0) {
        setSelectedAction(() => ({
          action,
          coordinates: { x: translationX, y: translationY },
          animatedStyles,
          canvas: value,
        }));
      }
    })
    .onUpdate((event) => {
      translationX.value = event.translationX;
      translationY.value = event.translationY;
    })
    .onEnd(() => {
      translationX.value = 0;
      translationY.value = 0;
      setSelectedAction(null);
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
      <Animated.View
        style={[styles.container, animatedStyles]}
        onLayout={handleLayout}
      >
        <Text style={styles.actionLabel}>{label} </Text>
        {isInput && (
          <TextInput
            style={styles.textInput}
            value={value1}
            onChange={(e: any) => {
              setValue && setValue(e.target.value);
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
              value={value2}
              onChange={(e: any) => {
                setValue2 && setValue2(e.target.value);
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
