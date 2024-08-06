import { View, StyleSheet } from "react-native";
import React from "react";
import { getTabContext } from "../../../hooks/CanvasTabContext";
import Preview from "./Preview";
import Actions from "./Actions";

const PanelView = () => {
  const { activeTab } = getTabContext();

  return (
    <View style={styles.container}>
      {activeTab === "preview" ? <Preview /> : <Actions />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    height: "100%",
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default PanelView;
