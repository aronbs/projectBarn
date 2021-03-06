import React from "react";
import { Text, StyleSheet } from "react-native";
import { FONT, SPACING, COLOURS } from "../styles";

const Heading = ({ children }) => (
  <Text style={styles.heading}>{children}</Text>
);

const Body = ({ children }) => <Text style={styles.body}>{children}</Text>;

const styles = StyleSheet.create({
  heading: {
    fontSize: FONT.SIZE.LARGER,
    fontWeight: FONT.WEIGHT.MEDIUM,
    marginVertical: SPACING.SMALL,
    color: COLOURS.BLACK
  },
  body: {
    fontSize: FONT.SIZE.MEDIUM,
    color: COLOURS.BLACK,
    fontWeight: FONT.WEIGHT.REGULAR
  }
});

export default { Heading, Body };
