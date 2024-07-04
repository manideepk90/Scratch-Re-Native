import { View, Text, StyleSheet } from "react-native";
import React from "react";
import VerticalLine from "../UtilComponent/VerticalLine";
import TabItem from "./TabItem";

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <TabItem label={"Preview"} path={"preview"} />
      <VerticalLine color="green" />
      <TabItem label={"Actions"} path={"actions"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    // position: "absolute",
    // bottom: 0,a
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FDE4BE",
    height: 50,
    gap: 4,
    margin: 4,
    borderRadius: 4,
  },
});

export default TabNavigator;
