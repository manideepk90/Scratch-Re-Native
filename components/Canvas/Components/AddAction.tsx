import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { addIcon } from "@/constants/icons";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Action from "@/lib/Action";

const AddAction = () => {
  const { selectedSprite, setSprites } = useMainContextProvider();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setSprites((prev) => {
          return prev.map((sprite) => {
            if (sprite.getId() === selectedSprite?.getId()) {
              sprite.addAction(new Action({ name: "New Action" }));
            }
            return sprite;
          });
        });
      }}
    >
      <Image source={addIcon} style={styles.image} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: "#FFAB19",
    borderRadius: 4,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
  },
});
export default AddAction;
