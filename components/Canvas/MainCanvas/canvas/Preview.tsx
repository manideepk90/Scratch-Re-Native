import { View, StyleSheet } from "react-native";
import React from "react";
import PropertiesPanel from "../../Components/PropertiesPanel";
import RunPanel from "../../Components/RunPanel";
import PreviewCanvas from "./PreviewCanvas";
import { useMainContextProvider } from "@/hooks/MainContextProvider";

const Preview = () => {
  const { selectedSprite } = useMainContextProvider();
  return (
    <View style={styles.container}>
      <PreviewCanvas />
      <RunPanel />
      {selectedSprite && (
        <>
          <PropertiesPanel />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    position: "relative",
    borderRadius: 4,
    gap: 5,
  },
});

export default Preview;
