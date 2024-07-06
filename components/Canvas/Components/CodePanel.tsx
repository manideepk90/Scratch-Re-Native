import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import ActionsItem from "./ActionsItem";
import AvailableActions from "@/constants/Actions";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const CodePanel = ({}: any) => {
  const [selectedAction, setSelectedAction] = React.useState({} as any);
  const scrollViewRef = React.useRef(null);
  const Actions = Object.keys(AvailableActions).map((key: string, index) => {
    return (
      <View style={styles.scrollView2} key={index}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {key} :
        </Text>
        {(AvailableActions as any)[key].map((action: any, index2: number) => (
          <ActionsItem
            key={index2}
            setSelectedAction={setSelectedAction}
            {...action}
            action={action}
            selectedAction={selectedAction}
            scrollViewRef={scrollViewRef}
          />
        ))}
      </View>
    );
  });
  console.log(selectedAction);
  return (
    <>
      {Object.keys(selectedAction || {}).length > 0 && (
        <Animated.View
          style={[
            {
              zIndex: 100,
            },
            selectedAction.animatedStyles,
            selectedAction.canvas,
          ]}
        >
          <ActionsItem
            {...selectedAction.action}
            action={selectedAction.action}
            isInput={false}
          />
        </Animated.View>
      )}
      <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollView}
          ref={scrollViewRef}
        >
          {Actions}
        </ScrollView>
      </View>
    </>
  );
};

export default CodePanel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 4,
  },
  scrollView: {
    flexDirection: "row",
    padding: 15,
    gap: 10,
    borderRadius: 4,
    backgroundColor: "#e4e4e4",
    height: 75,
  },
  scrollView2: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 4,
    borderRadius: 4,
  },
});
