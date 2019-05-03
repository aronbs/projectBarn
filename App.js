import React, { Component } from "react";
import { Platform, ScrollView, Text, View, SafeAreaView } from "react-native";
import {
  NavigationActions,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions
} from "react-navigation";
import Icon from "react-native-vector-icons/Feather";

import { COLOURS } from "./app/styles";
import LoginScreen from "./app/screens/Login";
import BookingsScreen from "./app/screens/Bookings";
import PasscodeScreen from "./app/screens/Passcode";
import HeaderTitle from "./app/components/HeaderTitle";
import BookingDetailScreen from "./app/screens/BookingDetail";
import { COLOURS, SPACING, FONT } from "./app/styles";

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
        headerTitle: <HeaderTitle />,
        drawerIcon: ({ tintColor }) => (
          <Icon name="log-in" size={24} color={tintColor} />
        )
      }
    },
    Bookings: {
      screen: BookingsNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="book" size={24} color={tintColor} />
        )
      }
    },
    Passcode: {
      screen: PasscodeNavigator
    }
  },
  {
    initialRouteName: "Bookings",
    contentComponent: props => <SideMenu {...props} />
  }
);

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View>
        <View style={{ backgroundColor: COLOURS.PRIMARY }}>
          <SafeAreaView style={{ backgroundColor: COLOURS.PRIMARY }}>
            <View
              style={{
                paddingHorizontal: SPACING.LARGE,
                paddingVertical: SPACING.MEDIUM,
                display: "flex",
                flexDirection: "row"
              }}
            >
              <View style={{ flex: 1, paddingBottom: SPACING.MEDIUM }}>
                <Icon name="circle" size={48} color={COLOURS.GRAYSCALE_LIGHT} />
              </View>
              <View
                style={{
                  flex: 3,
                  display: "flex",
                  paddingVertical: SPACING.SMALL,
                  color: COLOURS.WHITE
                }}
              >
                <Text
                  style={{
                    color: COLOURS.WHITE,
                    fontSize: FONT.SIZE.MEDIUM,
                    flex: 1
                  }}
                >
                  Jiebin Su
                </Text>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: FONT.WEIGHT.BOLD,
                    color: COLOURS.GRAYSCALE_LIGHT
                  }}
                >
                  Driver
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: SPACING.LARGE
          }}
        >
          <View
            style={{
              padding: SPACING.SMALL,
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: SPACING.SMALL,
              paddingVertical: SPACING.LARGE
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="user" size={24} color="grey" />
            </View>
            <View
              style={{
                flex: 5,
                paddingTop: SPACING.SMALLER
              }}
            >
              <Text>Bookings</Text>
            </View>
          </View>
          <View
            style={{
              padding: SPACING.SMALL,
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: SPACING.SMALL,
              paddingVertical: SPACING.LARGE
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="settings" size={24} color="grey" />
            </View>
            <View
              style={{
                flex: 5,
                paddingTop: SPACING.SMALLER
              }}
            >
              <Text onPress={this.navigateToScreen("Settings")}>Settings</Text>
            </View>
          </View>
          <View
            style={{
              padding: SPACING.SMALL,
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: SPACING.SMALL,
              paddingVertical: SPACING.LARGE
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="log-out" size={24} color="grey" />
            </View>
            <View
              style={{
                flex: 5,
                paddingTop: SPACING.SMALLER
              }}
            >
              <Text onPress={this.navigateToScreen("Logout")}>Logout</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default createAppContainer(AppNavigator);
