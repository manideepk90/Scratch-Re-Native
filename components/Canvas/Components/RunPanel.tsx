import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RunItem from "./RunItem";

const RunPanel = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.runLabel}>Run</Text>
      </View>
      <ScrollView horizontal style={{ height: 56 }}>
        <View style={styles.scrollView}>
          <RunItem />
          <RunItem />
          <RunItem />
          <RunItem />
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
