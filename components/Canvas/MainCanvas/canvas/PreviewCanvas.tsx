import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import IconPreview from "./IconPreview";
import SpriteView from "./SpriteView";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Sprite from "@/lib/Sprite";
import { ScrollView } from "react-native-gesture-handler";

const PreviewCanvas = () => {
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
      <IconPreview />
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
        onLayout={onLayout}
      >
        {sprites.map((sprite: Sprite) => (
          <SpriteView
            canvasArea={canvasArea}
            sprite={sprite}
            key={sprite.getId()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PreviewCanvas;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    zIndex: 1,
    flex: 3,
    borderRadius: 4,
    position: "relative",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
