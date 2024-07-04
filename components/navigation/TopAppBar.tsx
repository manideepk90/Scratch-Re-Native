import { menuIcon, textLogo } from "@/constants/icons";
import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
function TopAppBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backdrop} onPress={() => {}}>
        <View style={styles.modalContent}>
          <Image source={menuIcon} />
        </View>
      </TouchableOpacity>

      <View>
        <Image style={styles.textLogo} source={textLogo} />
      </View>
      <View style={styles.backdrop}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 5,
    height: 56,
    backgroundColor: "#FEFAF4",
    borderRadius: 4,
    padding: 8,
  },
  textLogo: {
    width: 100,
    height: 40,
    objectFit: "contain",
  },
  menuIcon: {},
  backdrop: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 10,
    alignItems: "center",
  },
});

export default TopAppBar;
