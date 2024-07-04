import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface props {
  onclick?: () => void;
}

const RunItem = ({ onclick }: props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onclick && onclick();
      }}
    >
      <Text style={styles.actionLabel}>Action 1</Text>
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
