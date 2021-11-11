import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";

//import { StyleSheet, Text, View } from "react-native";

// load the fonts
const getFonts = () =>
  Font.loadAsync({
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}
