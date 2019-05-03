import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions
} from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import LoginScreen from "./app/screens/Login";
import BookingsScreen from "./app/screens/Bookings";
import BookingDetailScreen from "./app/screens/BookingDetail";
import SettingsScreen from "./app/screens/Settings";
import LanguageScreen from "./app/screens/Settings/Language";
import DriverNameScreen from "./app/screens/Settings/DriverName";
import HeaderTitle from "./app/components/HeaderTitle";

const Burger = ({ onPress }) => (
  <Icon
    name="menu"
    size={24}
    color="white"
    style={{ marginLeft: 10 }}
    onPress={onPress}
  />
);

const NAVIGATION_OPTIONS = {
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#003580"
  },
  headerTitleStyle: {
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
};

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
    defaultNavigationOptions: NAVIGATION_OPTIONS
  }
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Settings",
        headerLeft: (
          <Burger
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      })
    },
    SettingsLanguage: {
      screen: LanguageScreen,
      navigationOptions: {
        headerTitle: "Change Language"
      }
    },
    SettingsDriverName: {
      screen: DriverNameScreen,
      navigationOptions: {
        headerTitle: "Change Name"
      }
    }
  },
  {
    defaultNavigationOptions: NAVIGATION_OPTIONS
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
    Settings: {
      screen: SettingsNavigator
    }
  },
  {
    initialRouteName: "Settings"
  }
);

export default createAppContainer(AppNavigator);
