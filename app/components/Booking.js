import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Badge from "./Badge";
import { COLOURS, SPACING, FONT, BORDER_RADIUS } from "../styles";

const Location = ({ text }) => (
  <View style={{ paddingBottom: SPACING.LARGE }}>
    <Text style={styles.locationHeading}>Pickup Location</Text>
    <Text>{text}</Text>
  </View>
);

const Booking = ({ pickupTime, pickupLocation, dropoffLocation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.pickupTimeContainer}>
        <Text style={styles.pickupTimeText}>{pickupTime}</Text>
      </View>
      <View style={styles.locationsContainer}>
        <Location text={pickupLocation} paddingBottom />
        <Location text={dropoffLocation} paddingBottom />
        <Badge variant="error" text="Action required" />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLOURS.WHITE,
    padding: SPACING.LARGE,
    marginVertical: SPACING.MEDIUM
  },
  pickupTimeContainer: {
    borderRightWidth: 1,
    borderRightColor: COLOURS.GRAYSCALE_LIGHTEST,
    flexDirection: "row",
    width: 60
  },
  pickupTimeText: {
    fontSize: FONT.SIZE.MEDIUM,
    fontWeight: FONT.WEIGHT.MEDIUM,
    flex: 1
  },
  locationsContainer: {
    paddingLeft: SPACING.LARGE,
    flex: 1
  },
  locationHeading: {
    color: COLOURS.GRAYSCALE,
    marginBottom: SPACING.SMALL
  }
});

export default Booking;
