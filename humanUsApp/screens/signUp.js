import React, { useState } from "react";
import BackIcon from "react-native-vector-icons/Feather";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = ({ navigation }) => {
  //hold the values of the inputs
  const [firstName, setFirstName] = useState("");

  const changeFirstName = (value) => {
    setFirstName(value);
  };

  //need a method to create user using the databases create method
  //yt video minute 6
  //https://www.youtube.com/watch?v=AvgrS-cCcXQ&list=PLYSxLlUA2IkEUZjlxfk-ecd6kD9vJjs2b&index=9

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const pressHandler = () => {
    navigation.navigate("Sign In"); // should match the screen names in App.js
  };

  //input validation
  const validateForm = () => {
    var form_inputs = [firstName, lastName, email, password, confirmPwd];
    var passwords_match = password == confirmPwd;

    // check if any signup fields are empty
    if (form_inputs.includes("") || form_inputs.includes(undefined))
      return console.log(form_inputs);
    if (!passwords_match) return console.log("passwords do not match");
    //if(passwords_match) return createUser();
  };

  return (
    <ScrollView style={styles.bottomView}>
      <BackIcon
        onPress={pressHandler}
        style={styles.backIcon}
        name="chevron-left"
        size={60}
        color={"black"}
      />
      <Text style={styles.heading}>Create Your {"\n"}Account</Text>
      <View style={styles.formView}>
        <TextInput
          value={firstName}
          onChangeText={changeFirstName}
          placeholder={"First Name "}
          placeholderTextColor={"grey"}
          style={styles.textInput}
        />
        <TextInput
          value={lastName}
          onChangeText={(val) => setLastName(val)}
          placeholder={"Last Name "}
          placeholderTextColor={"grey"}
          style={styles.textInput}
        />
        <TextInput
          value={email}
          onChangeText={(val) => setEmail(val)}
          placeholder={"Email  "}
          placeholderTextColor={"grey"}
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={(val) => setPassword(val)}
          placeholder={"Password "}
          placeholderTextColor={"grey"}
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TextInput
          value={confirmPwd}
          onChangeText={(val) => setConfirmPwd(val)}
          placeholder={"Confirm Password "}
          placeholderTextColor={"grey"}
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={validateForm} style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already a member? Log in</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    width: "100%",
    height: "70%",
    backgroundColor: "white", //backgroundColor: "black"
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 10,
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
  backIcon: {
    marginLeft: 5,
    marginTop: 60,
  },
});

export default SignUp;
