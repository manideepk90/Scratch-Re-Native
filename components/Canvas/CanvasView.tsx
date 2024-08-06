import { StyleSheet, View } from "react-native";
import React from "react";
import CanvasTabProvider from "../../hooks/CanvasTabContext";
import PanelView from "./MainCanvas/PanelView";
import TabNavigator from "../navigation/TabNavigator";

function CanvasView() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <CanvasTabProvider>
          <PanelView />
          <TabNavigator />
        </CanvasTabProvider>
      </View>
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
  },
  mainContainer: {
    position: "relative",
    flex: 4,
    // backgroundColor: "#ffffff",
    width: "100%",
    minHeight: 56,
    height: 100,
    borderRadius: 4,
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
  },
});

export default CanvasView;
