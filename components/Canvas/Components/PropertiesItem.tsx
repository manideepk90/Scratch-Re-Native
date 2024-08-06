import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import InputBox from "@/components/Confirmation/InputBox";

interface props {
  label?: string;
  value?: string | undefined;
  setValue?: any;
  type?: string;
  handleSave?: () => void;
}

const PropertiesItem = ({
  label = "Property",
  type = "text",
  value = "",
  setValue,
  handleSave,
}: props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setOpen(true);
      }}
    >
      <Text style={styles.actionLabel}>{label} : </Text>
      <Text style={styles.textInput}>{value}</Text>
      <InputBox
        title={label}
        open={open}
        type={type as "number" | "text" | undefined}
        handleClose={setOpen}
        value={value}
        setValue={setValue}
        handleConfirm={handleSave}
      />
    </TouchableOpacity>
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
    textAlign: "center",
  },
});
