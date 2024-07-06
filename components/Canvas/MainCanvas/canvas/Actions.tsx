import { StyleSheet, View } from "react-native";
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

export default Actions;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 5,
  },
});
