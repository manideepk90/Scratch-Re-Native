import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropertiesItem from "./PropertiesItem";
const PropertiesPanel = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{ height: 56 }}>
        <View style={styles.scrollView}>
          <PropertiesItem label="Sprite Name" />
          <PropertiesItem label="Size" type="number" />
          <PropertiesItem label="X" type="number" />
          <PropertiesItem label="Y" type="number" />
          <PropertiesItem label="Direction" type="number" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropertiesPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 70,
    width: "100%",
    backgroundColor: "#FDE4BE",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 4,
  },
  scrollView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 4,
    borderRadius: 4,
  },
  runLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
