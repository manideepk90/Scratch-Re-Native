import { StyleSheet, View } from "react-native";
import React from "react";

import CanvasTabProvider from "./CanvasTabContext";
import TabNavigator from "@/components/navigation/TabNavigator";
import PanelView from "./(canvasTabs)/PanelView";

function MainCanvas() {
  return (
    <View style={styles.container}>
      <CanvasTabProvider>
        <PanelView />
        <TabNavigator />
      </CanvasTabProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 4,
    backgroundColor: "#ffffff",
    width: "100%",
    minHeight: 56,
    height: 100,
    borderRadius: 4,
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
  },
});

export default MainCanvas;
