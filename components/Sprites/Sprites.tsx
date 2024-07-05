import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpriteItem from "./SpriteItem";
import AvailableSprites from "@/constants/AvailableSprites";
import Sprite from "@/lib/Sprite";

const Sprites = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {AvailableSprites.map((sprite: any, index: number) => {
          return (
            <SpriteItem
              key={sprite.id}
              index={index}
              isAdd={true}
              isDelete={false}
              sprite={new Sprite(sprite)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Sprites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 5,
    flex: 2,
    gap: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    padding: 10,
  },
});
