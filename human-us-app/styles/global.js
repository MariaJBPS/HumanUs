// contains all the different styles we will use in different components
import { StyleSheet } from "react-native";

//global styles
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleText: {
    fontFamily: "inter-bold",
    fontSize: 30,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
