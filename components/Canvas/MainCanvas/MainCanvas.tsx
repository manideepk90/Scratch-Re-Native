import { Text, View } from "react-native";
import React, { Component } from "react";
import { Stack, Tabs } from "expo-router";

export class MainCanvas extends Component {
  render() {
    return (
      <View>
        <Stack>
          <Stack.Screen name="(canvasTabs)" />
        </Stack>
      </View>
    );
  }
}

export default MainCanvas;
