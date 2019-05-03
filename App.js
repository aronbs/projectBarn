import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLOURS } from "./app/styles";
import LoginScreen from "./app/screens/Login";
import BookingsScreen from "./app/screens/Bookings";
import PasscodeScreen from "./app/screens/Passcode";
import HeaderTitle from "./app/components/HeaderTitle";
import BookingDetailScreen from "./app/screens/BookingDetail";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions
} from "react-navigation";

const Burger = ({ onPress }) => (
  <Icon
    name="menu"
    size={24}
    color="white"
    onPress={onPress}
    style={{ marginLeft: 10 }}
  />
);

const BookingsNavigator = createStackNavigator(
  {
    Bookings: {
      screen: BookingsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Scheduled Rides",
        headerLeft: (
          <Burger
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      })
    },
    BookingDetail: {
      screen: BookingDetailScreen,
      navigationOptions: {
        headerTitle: "Details"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: COLOURS.WHITE,
      headerStyle: {
        backgroundColor: COLOURS.PRIMARY
      },
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial" },
          android: { fontFamily: "Roboto" }
        })
      }
    }
  }
);

const PasscodeNavigator = createStackNavigator(
  {
    Passcode: {
      screen: PasscodeScreen,
      navigationOptions: {
        headerTitle: "Passcode"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: COLOURS.WHITE,
      headerStyle: {
        backgroundColor: COLOURS.PRIMARY
      },
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial" },
          android: { fontFamily: "Roboto" }
        })
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
    },
    Passcode: {
      screen: PasscodeNavigator
    }
  },
  {
    initialRouteName: "Passcode"
  }
);

export default createAppContainer(AppNavigator);
