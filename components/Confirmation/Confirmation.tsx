import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Confirmation = ({
  open,
  handleClose,
  handleConfirm,
  title = "Are you sure you want to delete this sprite?",
}: any) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={open}
      onRequestClose={() => handleClose(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={handleConfirm}
              style={[styles.button, styles.Acceptbutton]}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClose(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Confirmation;

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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 10,
    textAlign: "center",
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
