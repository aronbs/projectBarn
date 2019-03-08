import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import Typography from "../components/Typography";
import { SPACING } from "../styles";

const styles = StyleSheet.create({
  loginContainer: {
    marginVertical: SPACING.LARGEST,
    marginHorizontal: SPACING.LARGE
  }
});

class LoginScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginContainer}>
          <Typography.Heading>Welcome back</Typography.Heading>
          <Typography.Body>Login to start managing your rides.</Typography.Body>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
