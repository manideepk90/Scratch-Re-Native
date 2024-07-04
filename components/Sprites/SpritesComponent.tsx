import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SpriteItem from "./SpriteItem";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import DraggableFlatList from "react-native-draggable-flatlist";
import Sprite from "@/lib/Sprite";
function SpritesComponent() {
  const { sprites, setSprites } = useMainContextProvider();
  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: {
    item: Sprite;
    drag: () => void;
    isActive: boolean;
    getIndex: () => number | undefined;
  }) => {
    return (
      <SpriteItem
        key={item.getName()}
        sprite={item}
        index={getIndex()}
        longPress={drag}
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
          data={sprites}
          renderItem={renderItem}
          keyExtractor={(item) => item.getName()}
          horizontal
          onDragEnd={({ data }) => setSprites(data)}
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
    backgroundColor: "#FFF0D9",
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
