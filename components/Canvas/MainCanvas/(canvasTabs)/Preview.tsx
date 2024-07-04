import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PropertiesPanel from "../../Components/PropertiesPanel";
import RunPanel from "../../Components/RunPanel";
import PreviewCanvas from "./PreviewCanvas";

const Preview = () => {
  return (
    <View style={styles.container}>
      <PreviewCanvas />
      <RunPanel />
      <PropertiesPanel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    position: "relative",
    borderRadius: 4,
    gap: 5,
  },
});

export default Preview;
