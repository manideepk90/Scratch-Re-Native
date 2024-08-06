import { StyleSheet, View } from "react-native";
import React from "react";
import ActionView from "./ActionView";
import { ScrollView } from "react-native-gesture-handler";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Action from "@/lib/Action";
import AddAction from "../Components/AddAction";

interface props {
  canvasArea: { width: number; height: number };
}

const ActionsCanvas = ({ canvasArea }: props) => {
  const { selectedSprite } = useMainContextProvider();
  return (
    <View style={[styles.container]}>
      <AddAction />
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {selectedSprite?.getActions().map((action: Action, index: number) => (
          <ActionView action={action} canvasArea={canvasArea} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ActionsCanvas;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    borderRadius: 4,
    gap: 5,
    position: "relative",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
