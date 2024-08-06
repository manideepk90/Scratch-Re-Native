import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useMainContextProvider } from "@/hooks/MainContextProvider";

const IconPreview = () => {
  const { selectedSprite } = useMainContextProvider();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={selectedSprite?.getIcon()} />
    </View>
  );
};

export default IconPreview;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: "#e4e4e4",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  image: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },
});
