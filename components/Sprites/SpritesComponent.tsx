import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SpriteItem from "./SpriteItem";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import DraggableFlatList from "react-native-draggable-flatlist";
import Sprite from "@/lib/Sprite";
import AddSprite from "./AddSprite";
import { addIcon } from "@/constants/icons";

interface props {
  notAddable?: boolean;
}

function SpritesComponent({ notAddable = false }: props) {
  const { sprites, setSprites } = useMainContextProvider();
  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: {
    item: any;
    drag: () => void;
    isActive: boolean;
    getIndex: () => number | undefined;
  }) => {
    return item.getName() === "special-add-non-actionable-sprite" ? (
      !notAddable && <AddSprite />
    ) : (
      <SpriteItem
        key={item.getId()}
        sprite={item}
        index={getIndex()}
        longPress={drag}
        isActivelyDragging={isActive}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.spriteLabel}>
        <Text style={styles.spriteText}>Sprites</Text>
      </View>
      <View style={styles.scrollContainer}>
        <DraggableFlatList
          contentContainerStyle={{
            gap: 10,
            padding: 10,
          }}
          data={[
            ...sprites.filter(
              (sprite) =>
                sprite.getName() !== "special-add-non-actionable-sprite"
            ),
            new Sprite({
              name: "special-add-non-actionable-sprite",
              icon: addIcon,
            }),
          ]}
          renderItem={renderItem}
          keyExtractor={(item) => item.getId()}
          horizontal
          onDragEnd={({ data }) =>
            setSprites(
              data.filter(
                (sprite) =>
                  sprite.getName() !== "special-add-non-actionable-sprite"
              )
            )
          }
          containerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 0,
    backgroundColor: "#FFF0D9",
    width: "100%",
    minHeight: 56,
    height: 100,
    borderRadius: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    overflow: "scroll",
  },
  scrollContainer: {
    // backgroundColor: "#FFF0D9",
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  spriteLabel: {
    backgroundColor: "#FDE4BE",
    width: 30,
    minHeight: 20,
    height: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  spriteText: {
    transform: [{ rotate: "-90deg" }],
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
  },
});

export default SpritesComponent;
