import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import ActionsItem from "./ActionsItem";
import AvailableActions from "@/constants/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CodePanel = ({}: any) => {
  const Actions = useMemo(
    () =>
      Object.keys(AvailableActions).map((key: string, index) => {
        return (
          <View style={styles.actionsContainer} key={index}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {key} :
            </Text>
            {(AvailableActions as any)[key].map(
              (action: any, index2: number) => (
                <ActionsItem key={index2} {...action} action={action} />
              )
            )}
          </View>
        );
      }),
    []
  );
  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            -(translateX.value <= 0 ? -4 : translateX.value)
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.scrollButtons}
        onPress={() => {
          translateX.value = translateX.value <= 0 ? 0 : translateX.value - 100;
        }}
        onLongPress={() => {
          translateX.value = 0;
        }}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </TouchableOpacity>
      <View style={styles.scrollView}>
        <Animated.View style={[styles.scrollContainer, animatedStyles]}>
          {Actions}
        </Animated.View>
      </View>
      <TouchableOpacity
        style={styles.scrollButtons}
        onPress={() => {
          translateX.value = translateX.value + 100;
        }}
        onLongPress={() => {
          translateX.value = translateX.value + 500;
        }}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </TouchableOpacity>
    </View>
  );
};

export default CodePanel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 4,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollButtons: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    backgroundColor: "#FFAB19",
    width: 30,
    borderRadius: 4,
    zIndex: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    zIndex: 6,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 4,
    borderRadius: 4,
  },
});
