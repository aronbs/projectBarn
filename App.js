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
