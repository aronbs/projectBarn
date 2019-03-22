import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOURS, SPACING, FONT } from "../styles";

const Location = ({ text, paddingBottom = false }) => (
  <View style={{ paddingBottom: paddingBottom ? SPACING.LARGE : 0 }}>
    <Text style={styles.locationHeading}>Pickup Location</Text>
    <Text>{text}</Text>
  </View>
);

const Booking = ({ pickupTime, pickupLocation, dropoffLocation }) => (
  <View style={styles.container}>
    <View style={styles.pickupTimeContainer}>
      <Text style={styles.pickupTimeText}>{pickupTime}</Text>
    </View>
    <View style={styles.locationsContainer}>
      <Location text={pickupLocation} paddingBottom />
      <Location text={dropoffLocation} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: COLOURS.WHITE,
    padding: SPACING.LARGE,
    marginVertical: SPACING.MEDIUM
  },
  pickupTimeContainer: {
    borderRightWidth: 1,
    borderRightColor: COLOURS.GRAYSCALE_LIGHTEST,
    paddingRight: SPACING.LARGE
  },
  pickupTimeText: {
    fontSize: FONT.SIZE.MEDIUM,
    fontWeight: FONT.WEIGHT.MEDIUM
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
