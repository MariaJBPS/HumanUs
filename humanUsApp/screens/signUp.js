import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>Sign Up</Text>
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
  },
  textStyle: {
    //color: "#000",
  },
});

export default SignUp;
