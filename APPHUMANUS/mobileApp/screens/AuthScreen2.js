//AuthScreen2 combines both sign up and login into one page
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";



const API_URL = "http://localhost:5000"; // local?
//   Platform.OS === "ios" ? "https://localhost:5000" : "https://10.0.2.2:5000";

const AuthScreen2 = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //   const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const onLoggedIn = (token) => {
    console.log("trying login" + `${API_URL}/private`);
    fetch(`${API_URL}/private`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitHandler = () => {
    const payload = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log("on submit" + `${API_URL}/${isLogin ? "login" : "signup"}`);
    fetch(`${API_URL}/${isLogin ? "login" : "signup"}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  return (
    // <ImageBackground
    //   source={require("../public/images/gradient-back.jpeg")}
    //   style={styles.image}
    // >
    <View style={styles.card}>
      <Text style={styles.heading}>{isLogin ? "Login" : "Signup"}</Text>
      <View style={styles.form}>
        <View style={styles.inputs}>
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={setFirstName}
            ></TextInput>
          )}
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={setLastName}
            ></TextInput>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
          ></TextInput>
          <Text style={[styles.message, { color: isError ? "red" : "green" }]}>
            {message ? getMessage() : null}
          </Text>
          <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>

          {/* {!isLogin && (
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
          )} */}
          {/* icons not showing */}
          {/* {!isLogin && (
            <View style={styles.socialsView}>
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
          )} */}

          <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
            <Text style={styles.buttonAltText}>
              {isLogin ? "Sign Up" : "Log In"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   image: {
  //     flex: 1,
  //     width: "100%",
  //     alignItems: "center",
  //   },
  card: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "80%",
    marginTop: "10%",
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: "10%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "5%",
    marginBottom: "30%",
    color: "black",
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: "5%",
  },
  inputs: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: "80%",
    backgroundColor: "black",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonAlt: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonAltText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
  },
  message: {
    fontSize: 16,
    marginVertical: "5%",
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

export default AuthScreen2;
