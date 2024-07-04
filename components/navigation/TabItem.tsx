import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { getTabContext } from "../Canvas/MainCanvas/CanvasTabContext";

const TabItem = ({
  label = "Tab",
  path = "/",
}: {
  label?: string;
  path?: string;
}) => {
  const { activeTab, setPath } = getTabContext();
  return (
    <TouchableOpacity
      onPress={() => setPath(path)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: activeTab === path ? "#FFAB19" : "transparent",
        borderRadius: 2,
      }}
    >
      <Text style={{ fontWeight: 500, fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
