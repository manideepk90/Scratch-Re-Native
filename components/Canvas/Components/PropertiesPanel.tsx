import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import PropertiesItem from "./PropertiesItem";
import { useMainContextProvider } from "@/hooks/MainContextProvider";

const PropertiesPanel = () => {
  const { selectedSprite, setSelectedSprite, sprites, setSprites } =
    useMainContextProvider();
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{ height: 56 }}>
        <View style={styles.scrollView}>
          <PropertiesItem
            label="Sprite Name"
            value={selectedSprite?.getName()}
            setValue={(value: string) => {
              setSprites((prev) => {
                return prev.map((e) => {
                  if (e.getId() === selectedSprite?.getId()) {
                    e.setName(value);
                  }
                  return e;
                });
              });
            }}
          />
          <PropertiesItem
            label="Size"
            type="number"
            value={selectedSprite?.getSize()?.toString() || "0"}
            setValue={(value: string) => {
              setSprites((prev) => {
                return prev.map((e) => {
                  if (e.getId() === selectedSprite?.getId()) {
                    e.setSize(Number.parseInt(value) || 0);
                  }
                  return e;
                });
              });
            }}
          />
          <PropertiesItem
            label="X"
            type="number"
            value={selectedSprite?.getX()?.toLocaleString() || "0"}
            setValue={(value: string) => {
              setSprites((prev) => {
                return prev.map((e) => {
                  if (e.getId() === selectedSprite?.getId()) {
                    e.setX(Number.parseInt(value) || 0);
                  }
                  return e;
                });
              });
            }}
          />
          <PropertiesItem
            label="Y"
            type="number"
            value={selectedSprite?.getY()?.toLocaleString() || "0"}
            setValue={(value: string) => {
              setSprites((prev) => {
                return prev.map((e) => {
                  if (e.getId() === selectedSprite?.getId()) {
                    e.setY(Number.parseInt(value) || 0);
                  }
                  return e;
                });
              });
            }}
          />
          <PropertiesItem
            label="Direction"
            type="number"
            value={selectedSprite?.getDirection()?.toString() || "0"}
            setValue={(value: string) => {
              setSprites((prev) => {
                return prev.map((e) => {
                  if (e.getId() === selectedSprite?.getId()) {
                    e.setDirection(Number.parseInt(value) || 0);
                  }
                  return e;
                });
              });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropertiesPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 70,
    width: "100%",
    backgroundColor: "#FDE4BE",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 4,
  },
  scrollView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 4,
    borderRadius: 4,
  },
  runLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
