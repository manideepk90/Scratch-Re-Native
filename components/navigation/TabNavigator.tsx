import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import VerticalLine from "../UtilComponent/VerticalLine";
import TabItem from "./TabItem";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import { router } from "expo-router";

const TabNavigator = () => {
  const { selectedSprite, sprites } = useMainContextProvider();

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent:
            selectedSprite !== null ? "space-between" : "flex-end",
        },
      ]}
    >
      {selectedSprite !== null ? (
        <>
          <TabItem label={"Preview"} path={"preview"} />
          <VerticalLine color="green" />
          <TabItem label={"Actions"} path={"actions"} />
        </>
      ) : (
        <View style={styles.spriteContainer}>
          {sprites.length === 0 ? (
            <TouchableOpacity
              onPress={() => {
                router.push("Add Sprite");
              }}
              style={{
                backgroundColor: "#2196F3",
                paddingHorizontal: 35,
                flex: 1,
                minHeight: 46,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Add sprite
              </Text>
            </TouchableOpacity>
          ) : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Select sprite to start
            </Text>
          )}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "#FDE4BE",
    height: 50,
    gap: 4,
    margin: 4,
    borderRadius: 4,
  },
  spriteContainer: {
    flex: 1,
    maxHeight: 50,
    width: "100%",
    backgroundColor: "#FDE4BE",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 4,
    justifyContent: "center",
  },
});

export default TabNavigator;
