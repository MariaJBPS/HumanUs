import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import SignUp from "../screens/signUp";
import LogIn from "../screens/login";

// creates the stack
// home is at the top, so will be shown first by default
const screens = {
  Home: {
    //named as 'Home'
    screen: Home, // show component 'Home' on the screen
  },
  SignUp: {
    screen: SignUp,
  },
  LogIn: {
    screen: LogIn,
  },
};
const HomeStack = createStackNavigator(screens);

//returns a component that we can render to App.js
export default createAppContainer(HomeStack);
