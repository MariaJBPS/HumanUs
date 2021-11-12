import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({navigation}) {
  //we can use this to navigative to different screens
  const pressHandler = () => {
    navigation.navigate("LogIn");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Log out" onPress={pressHandler} />
    </View>
  );
}
