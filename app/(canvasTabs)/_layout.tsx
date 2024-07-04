import { Text, View } from "react-native";
import React, { Component } from "react";
import { Tabs } from "expo-router";

export class _layout extends Component {
  render() {
    return (
      <View>
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
          <Tabs.Screen
            name="Preview"
            options={{
              title: "Home",
            }}
          />
          <Tabs.Screen name="Actions" />
        </Tabs>
      </View>
    );
  }
}

export default _layout;
