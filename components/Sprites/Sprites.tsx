import { ScrollView, StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import SpriteItem from "./SpriteItem";
import AvailableSprites from "@/constants/AvailableSprites";
import Sprite from "@/lib/Sprite";

const Sprites = () => {
  const sprites = useMemo((): any => {
    return AvailableSprites;
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {sprites.map((sprite: any, index: number) => {
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
