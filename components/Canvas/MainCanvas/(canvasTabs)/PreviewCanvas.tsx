import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PreviewCanvas = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>PreviewCanvas</Text>
      </View>
    </View>
  );
};

export default PreviewCanvas;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
