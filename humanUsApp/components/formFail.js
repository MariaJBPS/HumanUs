import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/EvilIcons"; //exclamation and check

const FormFail = (props) => {
  return (
    <Overlay
      overlayStyle={styles.errorForm}
      isVisible={true} //get the properties of FormFail (displayError form) with props
      onBackdropPress={() => props.displayErrorForm(false)}
    >
      <Icon name="exclamation" size={70} color={"red"}></Icon>
      <Text style={styles.errorMsg}>{props.error}</Text>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => props.displayErrorForm(false)}
      >
        <Text style={styles.backBtnText}>Go Back</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  errorForm: {
    width: "80%",
    height: 320,
    borderRadius: 15,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  errorMsg: {
    color: "black",
    fontSize: 20,
    marginTop: 20,
  },
  backBtn: {
    width: 280,
    height: 52,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FormFail;
