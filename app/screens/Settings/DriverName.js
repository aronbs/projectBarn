import React, { PureComponent } from "react";
import { View, StatusBar, StyleSheet, TextInput } from "react-native";

import Typography from "../../components/Typography";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { SPACING } from "../../styles";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.LARGE,
    paddingVertical: SPACING.LARGER
  },
  inputContainer: {
    marginBottom: SPACING.LARGE
  }
});

class DriverNameScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.inputContainer}>
          <InputText label="Driver Name" value="Kieran Chadwick" />
        </View>
        <Button title="Submit" type="Primary" onPress={() => null} />
      </View>
    );
  }
}

export default DriverNameScreen;
