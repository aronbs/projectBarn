import React from "react";
import { TouchableHighlight, StyleSheet, Text } from "react-native";
import { COLOURS, SPACING, FONT } from "../styles";

const Button = ({ title, type, onPress }) => (
  <TouchableHighlight
    style={[styles.button, styles[`button${type}`]]}
    underlayColor={underlay[`${type}`]}
    onPress={onPress}
  >
    {title && (
      <Text style={[styles.buttonText, styles[`buttonText${type}`]]}>
        {title}
      </Text>
    )}
  </TouchableHighlight>
);

const underlay = {
  Primary: COLOURS.PRIMARY,
  Secondary: COLOURS.PRIMARY_LIGHTER
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginVertical: SPACING.SMALL
  },
  buttonPrimary: {
    backgroundColor: COLOURS.ACTION
  },
  buttonSecondary: {
    backgroundColor: COLOURS.WHITE,
    borderColor: COLOURS.PRIMARY,
    borderWidth: 1
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    color: COLOURS.BLACK,
    fontSize: FONT.SIZE.MEDIUM,
    fontWeight: FONT.WEIGHT.MEDIUM
  },
  buttonTextPrimary: {
    color: COLOURS.WHITE
  },
  buttonTextSecondary: {
    color: COLOURS.ACTION
  }
});

export default Button;
