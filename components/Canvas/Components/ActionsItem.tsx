import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface props {
  label?: string;
  value?: string | undefined;
  setValue?: (value: string | undefined) => void;
  type?: string;
  endLabel?: string;
  children?: any;
  input?: number;
  label2?: string;
  value2?: string | undefined;
  setValue2?: (value: string | undefined) => void;
  isInput?: boolean;
  endLabelMiddle?: string;
}

const ActionsItem = ({
  label = "",
  label2 = "",
  type = "text",
  input = 1,
  value: value1,
  endLabel = "",
  setValue,
  value2,
  setValue2,
  isInput = true,
  endLabelMiddle,
}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.actionLabel}>{label} </Text>
      {isInput && (
        <TextInput
          style={styles.textInput}
          value={value1}
          onChange={(e: any) => {
            setValue && setValue(e.target.value);
          }}
          keyboardType={type === "text" ? "ascii-capable" : "numeric"}
        />
      )}
      {endLabelMiddle && (
        <Text style={styles.actionLabel}>{endLabelMiddle}</Text>
      )}

      {input === 2 ? (
        <>
          <Text style={styles.actionLabel}>{label2} </Text>
          <TextInput
            style={styles.textInput}
            value={value2}
            onChange={(e: any) => {
              setValue2 && setValue2(e.target.value);
            }}
            keyboardType={type === "text" ? "ascii-capable" : "numeric"}
          />
        </>
      ) : null}
      <Text style={styles.actionLabel}>{endLabel}</Text>
    </View>
  );
};

export default ActionsItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    gap: 5,
    maxHeight: 40,
    backgroundColor: "#FFAB19",
    padding: 5,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textInput: {
    minWidth: 40,
    backgroundColor: "white",
    borderRadius: 100,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
