import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import MainCanvas from "./MainCanvas/MainCanvas";

function CanvasView() {
  return (
    <View style={styles.container}>
      <MainCanvas />
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
  scrollContainer: {},
});

export default CanvasView;
