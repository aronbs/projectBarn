import React, { Component } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/Feather";
import {
  Alert,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Platform
} from "react-native";

import Button from "../components/Button";
import Typography from "../components/Typography";

import { COLOURS, SPACING, FONT } from "../styles";

const isIOS = Platform.OS === "ios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: isIOS ? 16 : null,
    backgroundColor: COLOURS.WHITE,
    marginHorizontal: isIOS ? null : SPACING.LARGE
  },
  textContainer: {
    marginVertical: SPACING.LARGEST
  },
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: SPACING.LARGER
  },
  label: {
    color: COLOURS.GRAYSCALE,
    fontWeight: FONT.WEIGHT.MEDIUM
  },
  labelFocused: {
    color: COLOURS.ACTION
  },
  labelError: {
    color: COLOURS.DESTRUCTIVE_DARK
  },
  input: {
    width: "100%",
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: COLOURS.GRAYSCALE_LIGHTER
  },
  error: {
    width: "100%",
    paddingTop: 4,
    paddingBottom: 4,
    color: COLOURS.DESTRUCTIVE_DARK
  }
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  validationSchema = yup.object().shape({
    mobileNumber: yup.string().required("Please enter a valid mobile number")
  });

  onFocus = () => this.setState({ focused: true });

  render() {
    const { focused } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.textContainer}>
          <Typography.Heading>Sign In</Typography.Heading>
          <Typography.Body>Login to start managing your rides.</Typography.Body>
        </View>

        <Formik
          initialValues={{ mobileNumber: "" }}
          validationSchema={this.validationSchema}
          onSubmit={values => Alert.alert(JSON.stringify(values, null, 2))}
        >
          {({
            errors,
            values,
            touched,
            handleBlur,
            handleChange,
            handleSubmit
          }) => {
            const hasError = touched.mobileNumber && errors.mobileNumber;

            return (
              <View style={{ flex: 1 }}>
                <View style={{ paddingBottom: 8 }}>
                  <Text
                    style={[
                      styles.label,
                      focused && styles.labelFocused,
                      errors.mobileNumber && styles.labelError
                    ]}
                  >
                    {(hasError && errors.mobileNumber) || "Mobile number"}
                  </Text>

                  <View>
                    <TextInput
                      style={styles.input}
                      onFocus={this.onFocus}
                      keyboardType="default"
                      value={values.mobileNumber}
                      placeholder="Mobile number"
                      selectionColor={COLOURS.ACTION}
                      onBlur={handleBlur("mobileNumber")}
                      onChangeText={handleChange("mobileNumber")}
                    />

                    <Icon
                      name="menu"
                      size={24}
                      color="white"
                      style={{ marginLeft: 10 }}
                    />
                  </View>
                </View>

                <KeyboardAvoidingView behavior="padding">
                  <Button title="Next" type="Primary" onPress={handleSubmit} />
                </KeyboardAvoidingView>
              </View>
            );
          }}
        </Formik>
      </View>
    );
  }
}

export default LoginScreen;
