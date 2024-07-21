import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Action from "@/lib/Action";

interface props {
  onclick?: (action: Action) => void;
  action: Action;
  longPress: () => void;
}

const RunItem = ({ action, onclick, longPress }: props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onclick && onclick(action);
      }}
      onLongPress={longPress}
    >
      <Text style={styles.actionLabel}>{action.getName()}</Text>
    </TouchableOpacity>
  );
};

export default RunItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    gap: 5,
    maxHeight: 40,
    backgroundColor: "#FFAB19",
    padding: 10,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
