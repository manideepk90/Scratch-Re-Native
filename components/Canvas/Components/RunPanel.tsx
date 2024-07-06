import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RunItem from "./RunItem";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Action from "@/lib/Action";

const RunPanel = () => {
  const { selectedSprite, setSprites } = useMainContextProvider();

  const runAction = (action: Action) => {
    setSprites((prev) => {
      return prev.map((sprite) => {
        if (sprite.getId() === selectedSprite?.getId()) {
          sprite.getActions().map((ac) => {
            if (ac.getId() === action.getId()) {
              ac.runAction(sprite);
            }
          });
        }
        return sprite;
      });
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.runLabel}>Run</Text>
      </View>
      <ScrollView horizontal style={{ height: 56 }}>
        <View style={styles.scrollView}>
          {selectedSprite?.getActions().map((action, index) => (
            <RunItem key={index} action={action} onclick={runAction} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RunPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    width: "100%",
    backgroundColor: "#FDE4BE",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 4,
  },
  scrollView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 4,
    borderRadius: 4,
  },
  runLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
