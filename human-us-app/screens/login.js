import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Login({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Log In</Text>
      <Button title="Log in" onPress={pressHandler} />
    </View>
  );
}
