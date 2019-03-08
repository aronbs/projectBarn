import React from "react";
import { Text, StyleSheet } from "react-native";
import { FONT, SPACING } from "../styles";

const Heading = ({ children }) => (
  <Text style={styles.heading}>{children}</Text>
);

const Body = ({ children }) => <Text style={styles.body}>{children}</Text>;

const styles = StyleSheet.create({
  heading: {
    fontSize: FONT.SIZE.LARGER,
    fontWeight: FONT.WEIGHT.MEDIUM,
    marginVertical: SPACING.SMALL
  },
  body: {
    fontSize: FONT.SIZE.MEDIUM
  }
});

export default { Heading, Body };
