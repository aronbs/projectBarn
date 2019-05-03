import React, { Component, Fragment } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Alert, Button, View } from "react-native";

import InputText from "../../../components/InputText";

import styles from "./LoginForm.styles";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  validationSchema = yup.object().shape({
    mobileNumber: yup.string().required("Please enter a valid mobile number")
  });

  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ mobileNumber: "" }}
          validationSchema={this.validationSchema}
          onSubmit={values => Alert.alert(JSON.stringify(values, null, 2))}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values
          }) => (
            <View style={{}}>
              <View style={{}}>
                <InputText
                  label="Mobile number"
                  keyboardType="numeric"
                  value={values.mobileNumber}
                  onBlur={handleBlur("mobileNumber")}
                  onChangeText={handleChange("mobileNumber")}
                  error={errors.mobileNumber}
                  touched={touched.mobileNumber}
                />
              </View>
              <Button
                style={{ color: "red", padding: 16, width: "100%" }}
                onPress={handleSubmit}
                title="Submit"
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default LoginForm;
