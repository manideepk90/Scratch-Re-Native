import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { deleteIcon } from "@/constants/icons";
import Sprite from "@/lib/Sprite";
import { useMainContextProvider } from "@/hooks/MainContextProvider";

interface props {
  sprite: Sprite;
  longPress?: () => void;
  index: number | undefined;
}

const SpriteItem = ({ sprite, longPress, index }: props) => {
  const { selectedSprite, setSelectedSprite, deleteSprite } =
    useMainContextProvider();
  const mainStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      width: 75,
      height: 75,
      borderWidth: sprite.getName() === selectedSprite.getName() ? 2 : 0.8,
      borderColor:
        sprite.getName() === selectedSprite.getName() ? "#1E6BFF" : "#ffffff",
      alignItems: "center",
      position: "relative",
      borderRadius: 4,
    },
  });
  return (
    <TouchableOpacity
      style={mainStyles.container}
      onLongPress={longPress}
      onPress={() => {
        setSelectedSprite(sprite);
      }}
    >
      <TouchableOpacity
        style={styles.deleteIconContainer}
        onPress={() => {
          deleteSprite(index);
        }}
      >
        <Image style={styles.deleteIcon} source={deleteIcon} />
      </TouchableOpacity>
      <Image
        source={sprite.getIcon()}
        style={{
          width: 45,
          height: 45,
          objectFit: "contain",
        }}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{sprite.getName()}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "#FDE4BE",
    width: "100%",
    padding: 4,
    height: 25,
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
