import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { deleteIcon } from "@/constants/icons";

const SpriteItem = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteIconContainer} onPress={() => {}}>
        <Image style={styles.deleteIcon} source={deleteIcon} />
      </TouchableOpacity>
      <Text>SpriteItem</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Sprite</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: 75,
    height: 75,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    alignItems: "center",
    position: "relative",
    borderRadius: 4,
  },
  labelContainer: {
    backgroundColor: "#FDE4BE",
    width: "100%",
    position: "absolute",
    bottom: 0,
    // minHeight: 20,
    padding: 4,
    // height: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  deleteIconContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 30,
    height: 30,
    backgroundColor: "#FFAB19",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});

export default SpriteItem;
