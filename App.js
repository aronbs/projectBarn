import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions
} from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import LoginScreen from "./app/screens/Login";
import BookingsScreen from "./app/screens/Bookings";
import HeaderTitle from "./app/components/HeaderTitle";

const BookingsNavigator = createStackNavigator(
  {
    Bookings: {
      screen: BookingsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Last updated", // Title to appear in status bar
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="white"
            style={{ marginLeft: 6 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      })
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
const AppNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: <HeaderTitle />
      }
    },
    Bookings: {
      screen: BookingsNavigator
    }
  },
  {
    initialRouteName: "Bookings"
  }
);

export default createAppContainer(AppNavigator);
