import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet
} from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { SPACING } from "../styles";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.LARGE,
    flex: 1,
    flexDirection: "column"
  },
  textContainer: {
    marginVertical: SPACING.LARGEST
  },
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: SPACING.LARGER
  }
});

class LoginScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.textContainer}>
          <Typography.Heading>Welcome back</Typography.Heading>
          <Typography.Body>Login to start managing your rides.</Typography.Body>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.buttonContainer}>
          <Button title="Next" type="Primary" onPress={() => null} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default LoginScreen;
