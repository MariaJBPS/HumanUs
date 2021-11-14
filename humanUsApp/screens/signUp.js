import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <ScrollView style={styles.bottomView}>
        <View style={styles.topView}></View>
        <Text style={styles.heading}>Create Account</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"First Name "}
            placeholderTextColor={"grey"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Last Name "}
            placeholderTextColor={"grey"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Email  "}
            placeholderTextColor={"grey"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Password "}
            placeholderTextColor={"grey"}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"Confirm Password "}
            placeholderTextColor={"grey"}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <Text>Already a member? Log in</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40%",
    backgroundColor: "white",
  },
  bottomView: {
    width: "100%",
    height: "90%",
    backgroundColor: "white", //backgroundColor: "black"
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 60,
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  textInput: {
    width: "90%",
    borderWidth: 2,
    borderColor: "black", // borderColor: "white"
    height: 52,
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
    fontSize: 16,
  },
  signInButton: {
    width: "90%",
    //color: "white",
    height: 52,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    // 'Sign In' button text
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpButton: {
    width: "90%",
    height: 52,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;
