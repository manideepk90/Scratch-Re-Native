import { backIcon, menuIcon, textLogo } from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface props {
  isBack?: boolean;
}

function TopAppBar({ isBack = false }: props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backdrop}
        onPress={() => {
          isBack ? router.navigate("/Home") : () => {};
        }}
      >
        <View style={styles.modalContent}>
          <Image source={isBack ? backIcon : menuIcon} />
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
    backgroundColor: "#FFF0D9",
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
