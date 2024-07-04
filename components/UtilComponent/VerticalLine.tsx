import { View, Text, StyleSheet } from "react-native";
import React from "react";

const VerticalLine = ({ color = "#FFAB19", width = 3 }) => {
  const styles = StyleSheet.create({
    container: {
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

export default VerticalLine;
