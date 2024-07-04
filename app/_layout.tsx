import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import TopAppBar from "@/components/navigation/TopAppBar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpritesComponent from "@/components/Sprites/SpritesComponent";
import CanvasView from "@/components/Canvas/CanvasView";

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        marginTop: insets.top,
        paddingBottom: insets.bottom + 44,
        backgroundColor: "#F9B353",
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
