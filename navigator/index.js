import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "../SplashScreen/index";
import LoginScreen from "../LoginScreen/index";

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
    }
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);
export default createAppContainer(RootNavigator)