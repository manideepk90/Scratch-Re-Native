import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

function SpritesComponent() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Sprites go here */}
        <View></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 0,
    backgroundColor: "#FEFAF4",
    width: "100%",
    minHeight: 56,
    height: 100,
    borderRadius: 4,
  },
  scrollContainer: {},
});

export default SpritesComponent;
