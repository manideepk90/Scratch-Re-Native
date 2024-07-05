import React from "react";

import TopAppBar from "@/components/navigation/TopAppBar";
import { View } from "react-native";
import SpritesComponent from "@/components/Sprites/SpritesComponent";
import CanvasView from "@/components/Canvas/CanvasView";
import "react-native-gesture-handler";

export default function Home() {
  return (
    <View
      style={{
        height: "100%",
        padding: 5,
        gap: 5,
        justifyContent: "space-between",
      }}
    >
      <TopAppBar />
      <CanvasView />
      <SpritesComponent />
    </View>
  );
}
