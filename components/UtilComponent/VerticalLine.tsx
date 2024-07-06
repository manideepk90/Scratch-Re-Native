import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Line = ({ color = "#FFAB19", width = 3, horizontal = false }) => {
  const styles = StyleSheet.create({
    container: horizontal
      ? {
          width: "100%",
          height: width,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: color,
          borderRadius: 4,
        }
      : {
          height: "100%",
          width: width,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: color,
          borderRadius: 4,
        },
  });
  return <View style={styles.container}></View>;
};

export default Line;
