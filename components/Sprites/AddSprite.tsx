import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { addIcon } from "@/constants/icons";
import { router } from "expo-router";

const AddSprite = () => {
  const mainStyles = StyleSheet.create({
    container: {
      justifyContent: "center",
      width: 75,
      height: 75,
      borderWidth: 2,
      borderColor: "#ffffff",
      alignItems: "center",
      position: "relative",
      borderRadius: 4,
    },
  });
  return (
    <TouchableOpacity
      style={mainStyles.container}
      onPress={() => {
        router.push("Add Sprite");
      }}
    >
      <Image style={styles.deleteIcon} source={addIcon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  deleteIcon: {
    width: 50,
    height: 50,
  },
});
export default AddSprite;
