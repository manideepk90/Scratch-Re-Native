import { StyleSheet, View } from "react-native";
import React from "react";

import CanvasTabProvider from "./CanvasTabContext";
import TabNavigator from "@/components/navigation/TabNavigator";

function MainCanvas() {
  return (
    <View style={styles.container}>
      <CanvasTabProvider>
        <TabNavigator />
      </CanvasTabProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 0,
    flex: 3,
    backgroundColor: "#FFF0D9",
    width: "100%",
    minHeight: 56,
    height: 100,
    borderRadius: 4,
    overflow: "hidden",
    alignItems: "center",
    padding: 4,
  },
});

export default MainCanvas;
