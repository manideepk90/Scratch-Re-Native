import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface InputBoxProps {
  open: boolean;
  handleClose: any;
  handleConfirm?: () => void;
  title?: string;
  type?: "text" | "number";
  value: string;
  setValue?: any;
}

const InputBox = ({
  open,
  handleClose,
  handleConfirm,
  title = "Enter Value",
  type = "text",
  value,
  setValue,
}: InputBoxProps) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={open}
      onRequestClose={() => handleClose(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter {title}</Text>
          <TextInput
            autoFocus
            style={styles.inputText}
            keyboardType={type === "text" ? "ascii-capable" : "numeric"}
            value={value}
            onChangeText={(text) => {
              setValue && setValue(text);
            }}
            placeholder="Enter Value here"
          />
          {handleConfirm ? (
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={handleConfirm}
                style={[styles.button, styles.Acceptbutton]}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClose(false)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() => handleClose(false)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    width: 300,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  inputText: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  Acceptbutton: {
    backgroundColor: "red",
  },
  button: {
    padding: 10,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#2196F3",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
