import React, { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainContextProvider from "@/hooks/MainContextProvider";
import { router, Stack } from "expo-router";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  useEffect(() => {
    router.replace("Home");
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainContextProvider>
        <View
          style={{
            marginTop: insets.top,
            paddingBottom: insets.bottom + 40,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" />
            <Stack.Screen name="Add Sprite" />
          </Stack>
        </View>
      </MainContextProvider>
    </GestureHandlerRootView>
  );
}
