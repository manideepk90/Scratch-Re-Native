import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import IconPreview from "./IconPreview";
import ActionView from "./ActionView";
import { ScrollView } from "react-native-gesture-handler";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Action from "@/lib/Action";

interface props {}

const ActionsCanvas = ({}: props) => {
  const { selectedSprite } = useMainContextProvider();
  const [canvasArea, setCanvasArea] = useState({
    width: 0,
    height: 0,
  });
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setCanvasArea(() => ({ width, height }));
  };
  return (
    <View style={[styles.container]} onLayout={onLayout}>
      <IconPreview />
      <ScrollView
        horizontal={true}
        onLayout={onLayout}
        contentContainerStyle={styles.scrollView}
      >
        {selectedSprite?.getActions().map((action: Action, index: number) => (
          <ActionView action={action} canvasArea={canvasArea} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ActionsCanvas;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    borderRadius: 4,
    gap: 5,
  },
  scrollView: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
