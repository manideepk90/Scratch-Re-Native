import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ActionsItem from "./ActionsItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import AvailableActions from "@/constants/Actions";

const CodePanel = ({
  canvasArea,
}: {
  canvasArea: { width: number; height: number };
}) => {
  // const Actions = useMemo(
  //   () =>
  //     Object.keys(AvailableActions).map((key: string, index) => {
  //       return (
  //         <View style={styles.actionsContainer} key={index}>
  //           <Text
  //             style={{
  //               fontSize: 16,
  //               fontWeight: "bold",
  //             }}
  //           >
  //             {key} :
  //           </Text>
  //           {(AvailableActions as any)[key].map(
  //             (action: any, index2: number) => (
  //               <ActionsItem
  //                 canvasArea={canvasArea}
  //                 key={index2}
  //                 {...action}
  //                 action={action}
  //               />
  //             )
  //           )}
  //         </View>
  //       );
  //     }),
  //   [canvasArea]
  // );
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
  const [showingAction, setShowingAction] = React.useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.scrollButtons}
        disabled={showingAction === 0}
        onPress={() => {
          setShowingAction((p) => (p <= 0 ? 0 : p - 1));
        }}
        onLongPress={() => {
          translateX.value = 0;
        }}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </TouchableOpacity>
      <View style={styles.scrollView}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {AvailableActions[showingAction].actionType}
        </Text>
        <Animated.View style={[styles.scrollContainer, animatedStyles]}>
          <ActionsItem
            {...AvailableActions[showingAction]}
            action={AvailableActions[showingAction]}
            canvasArea={canvasArea}
          />
        </Animated.View>
      </View>
      <TouchableOpacity
        disabled={showingAction === AvailableActions.length - 1}
        style={styles.scrollButtons}
        onPress={() => {
          setShowingAction((p) => p + 1);
        }}
        onLongPress={() => {
          setShowingAction((p) => p + 3);
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
    maxHeight: 60,
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
