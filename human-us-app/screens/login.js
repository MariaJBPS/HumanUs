import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Log In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
