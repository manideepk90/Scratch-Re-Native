import { StyleSheet, View } from "react-native";
import React from "react";
import IconPreview from "./IconPreview";

interface props {
  canvasArea: { width: number; height: number };
}

const ActionsCanvas = ({ canvasArea }: props) => {
  return (
    <View style={[styles.container]}>
      <IconPreview />
    </View>
  );
};

export default ActionsCanvas;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    borderRadius: 4,
    gap: 5,
  },
});
