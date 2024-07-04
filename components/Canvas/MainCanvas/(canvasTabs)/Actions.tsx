import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CodePanel from "../../Components/CodePanel";
import ActionsCanvas from "./ActionsCanvas";

const Actions = () => {
  return (
    <View style={styles.container}>
      <ActionsCanvas />
      <CodePanel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    position: "relative",
    borderRadius: 4,
    gap: 5,
  },
});

export default Actions;
