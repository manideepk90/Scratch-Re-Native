import { View, StyleSheet } from "react-native";
import React from "react";
import { getTabContext } from "../CanvasTabContext";
import Preview from "./Preview";
import Actions from "./Actions";

const PanelView = () => {
  const { activeTab } = getTabContext();

  return activeTab === "preview" ? (
    <View style={styles.container}>
      <Preview />
    </View>
  ) : (
    <View style={styles.container}>
      <Actions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    borderRadius: 4,
  },
});

export default PanelView;
