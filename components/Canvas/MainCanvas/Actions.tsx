import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CodePanel from "../Components/CodePanel";
import ActionsCanvas from "./ActionsCanvas";

const Actions = () => {
  const [canvasArea, setCanvasArea] = useState({ width: 0, height: 0 });
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setCanvasArea({ width, height });
  };
  return (
    <View style={styles.container} onLayout={onLayout}>
      <ActionsCanvas canvasArea={canvasArea} />
      <CodePanel canvasArea={canvasArea} />
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
});
