import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOURS, SPACING, FONT } from "../styles";

const Booking = ({ pickupTime, pickupLocation, dropoffLocation }) => (
  <View style={styles.container}>
    <View style={styles.pickupTimeContainer}>
      <Text style={styles.pickupTimeText}>{pickupTime}</Text>
    </View>
    <View style={styles.locationsContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationHeading}>Pickup Location</Text>
        <Text>{pickupLocation}</Text>
      </View>

      <Text style={styles.locationHeading}>Dropoff Location</Text>
      <Text>{dropoffLocation}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: COLOURS.WHITE,
    padding: SPACING.LARGE
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
    paddingLeft: SPACING.LARGE
  },
  locationContainer: {
    marginBottom: SPACING.LARGE
  },
  locationHeading: {
    color: COLOURS.GRAYSCALE,
    marginBottom: SPACING.SMALL
  }
});

export default Booking;
