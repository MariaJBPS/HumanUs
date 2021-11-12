import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import SignUp from "../screens/signUp";
import LogIn from "../screens/login";

// probably need a welcome screen
// creates the stack
// home is at the top, so will be shown first by default
const screens = {
  Home: {
    //named as 'Home'
    screen: Home, // show component 'Home' on the screen
    navigationOptions: {
      title: "Welcome",
      //headerStyle: { backgroundColor: 'green' }, // can override it
    },
  },
  SignUp: {
    screen: SignUp,
  },
  LogIn: {
    screen: LogIn, //or log out
    navigationOptions: {
      title: "Log In",
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#ffb4b4",
      //height: 100,
    },
  },
});

//returns a component that we can render to App.js
export default createAppContainer(HomeStack);
