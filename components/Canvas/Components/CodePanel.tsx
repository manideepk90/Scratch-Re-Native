import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionsItem from "./ActionsItem";
import AvailableActions from "@/constants/Actions";
const CodePanel = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{ height: 56 }}>
        <View style={styles.scrollView}>
          {Object.keys(AvailableActions).map((key: string, index: number) => {
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
                {(AvailableActions as any)[key].map(
                  (action: any, index2: number) => (
                    <ActionsItem
                      key={index2}
                      {...action}
                    //   label={action.label}
                    //   value={action.value}
                    //   endLabel={action.endLabel}
                    //   type={action.type}
                    //   input={action.input}
                    //   label2={action.label2}
                    //   value2={action.value2}
                    />
                  )
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CodePanel;

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
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 10,
    borderRadius: 4,
  },
  scrollView2: {
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
