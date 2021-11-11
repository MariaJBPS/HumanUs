import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Log In</Text>
    </View>
  );
}
