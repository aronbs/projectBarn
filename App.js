import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./app/screens/Login";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#003580"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
