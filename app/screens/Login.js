import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import HeaderTitle from "../components/HeaderTitle";

class LoginScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar barStyle="light-content" />
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default LoginScreen;
