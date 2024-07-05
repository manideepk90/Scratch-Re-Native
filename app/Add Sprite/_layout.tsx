import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopAppBar from "@/components/navigation/TopAppBar";
import Sprites from "@/components/Sprites/Sprites";
import SpritesComponent from "@/components/Sprites/SpritesComponent";

const _layout = () => {
  return (
    <View
      style={{
        backgroundColor: "#F9B353",
        height: "100%",
        padding: 5,
        gap: 5,
        justifyContent: "space-between",
      }}
    >
      <TopAppBar isBack />
      <Sprites />
      <SpritesComponent notAddable />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({});
