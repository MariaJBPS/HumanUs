import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignIn = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Sign Up"); // should match the screen names in App.js
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topView}></View>
      <ScrollView style={styles.bottomView}>
        <Text style={styles.heading}>
          Welcome {"\n"}
          back!
        </Text>
        <View style={styles.formView}>
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
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signIn}>Log in</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.orLine}></View>
            <Text> Or log in with: </Text>
            <View style={styles.orLine}></View>
          </View>
          <View style={styles.socialsView}>
            {/* social media icons view */}
            <View style={styles.facebookView}>
              <Icon
                //onPress={}
                name="facebook-square"
                size={50}
                color={"black"}
              />
            </View>
            <View style={styles.googleView}>
              <Icon
                //onPress={}
                name="google"
                size={50}
                color={"black"}
              />
            </View>
          </View>
          <Text style={{ marginTop: 40 }}>Don't have an account?</Text>
          <TouchableOpacity style={styles.signUpButton} onPress={pressHandler}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
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
    //height: "40%",
    backgroundColor: "#ffb4b4",
  },
  topView: {
    width: "100%",
    height: "10%",
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
  socialsView: {
    flex: 2,
    height: 50,
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  facebookView: {
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 2,
    marginLeft: 140,
    marginRight: 10,
  },
  googleView: {
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 2,
    marginRight: 130,
    marginLeft: 20,
  },
  orLine: {
    height: 1,
    width: 137,
    backgroundColor: "#bfbfbf",
  },
});

export default SignIn;
