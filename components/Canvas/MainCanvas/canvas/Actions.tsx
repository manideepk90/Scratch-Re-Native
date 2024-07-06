import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import CodePanel from "../../Components/CodePanel";

import ActionsCanvas from "./ActionsCanvas";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import ActionsItem from "../../Components/ActionsItem";
import { Gesture } from "react-native-gesture-handler";

const Actions = () => {
  const { sprites } = useMainContextProvider();
  const [canvasArea, setCanvasArea] = useState({
    width: 0,
    height: 0,
  });
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setCanvasArea(() => ({ width, height }));
  };

  return (
    <View style={styles.container}>
      <ActionsCanvas canvasArea={canvasArea} />
      <CodePanel />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 5,
  },
  scrollContainer: {
    zIndex: 1,
    borderRadius: 4,
    flex: 1,
    height: 75,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
