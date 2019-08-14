import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "../app/Screens/SplashScreen/index";
import LoginScreen from "../app/Screens/LoginScreen/index";
import RegisterScreen from "../app/Screens/RegisterScreen/index";

// Manifest of possible screens
const RootNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      key: "SplashScreen",
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    LoginScreen: {
      screen: LoginScreen,
      key: "LoginScreen",
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    RegisterScreen: {
      screen: RegisterScreen,
      key: "RegisterScreen"
    }
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);
export default createAppContainer(RootNavigator);
