//AuthScreen2 combines both sign up and login into one page
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const API_URL = "http://localhost:5000"; // local?

const AuthScreen2 = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  //change login boolean value
  // depending whether you're clicking
  // on a sign up or log in button
  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const onLoggedIn = (token) => {
    if (isLogin) {
      //if user is logged in
      global.email = email; //save their email globally
    }

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

  // deals with what happens after clicking on a sign up/log in button
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
            // errors during sign up/login
            setIsError(true);
            setMessage(jsonRes.message);
          } // redirect the user to the home page
          // else if (jsonRes.message === "here is your resource") {
          //   onLoggedIn(jsonRes.token);
          //   location.href = "/"; // path to home page
          //   console.log('logged in');
          // }
          else {
            // if status is 200, then user is logged/signed up in succesfully
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
          }

          // redirect the user to the home page
          // if (jsonRes.message === "user logged in") {
          //   console.log("logged in");
          //   onLoggedIn(jsonRes.token);
          //   setIsError(false);
          //   location.href = "/"; // path to home page
          //   this.props.history.push("/");
          // }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //display an eror or success message
  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  return (
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

          <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
            <Text style={styles.buttonAltText}>
             { /* if on login page, button text changes to Sign up, else.. */}
              {isLogin ? "Sign Up" : "Log In"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AuthScreen2;
