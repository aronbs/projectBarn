import React from "react";
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
            size={26}
            color="white"
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

/* const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: <HeaderTitle />
      }
    },
    Main: {
      screen: MainNavigator
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#003580"
      }
    },
    headerMode: "float"
  }
); */

export default createAppContainer(AppNavigator);
