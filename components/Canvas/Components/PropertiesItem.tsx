import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface props {
  label?: string;
  value?: string | undefined;
  setValue?: (value: string | undefined) => void;
  type?: string;
}

const PropertiesItem = ({
  label = "Property",
  type = "text",
  value,
  setValue,
}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.actionLabel}>{label} : </Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChange={(e: any) => {
          setValue && setValue(e.target.value);
        }}
        keyboardType={type === "text" ? "ascii-capable" : "numeric"}
      />
    </View>
  );
};

export default PropertiesItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    gap: 5,
    maxHeight: 40,
    backgroundColor: "#FFAB19",
    padding: 5,
    borderRadius: 150,
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
