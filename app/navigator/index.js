import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "../Screens/SplashScreen/index";
import LoginScreen from "../Screens/LoginScreen/index";
import RegisterScreen from "../Screens/RegisterScreen/index";

const RootNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      key: "SplashScreen",
    },
    LoginScreen: {
      screen: LoginScreen,
      key: "LoginScreen",
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
