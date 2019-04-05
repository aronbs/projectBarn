import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Badge from "./Badge";
import { COLOURS, SPACING, FONT } from "../styles";

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
        <Location text={pickupLocation} />
        <Location text={dropoffLocation} />
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
    marginVertical: SPACING.SMALL
  },
  pickupTimeContainer: {
    borderRightWidth: 1,
    borderRightColor: COLOURS.GRAYSCALE_LIGHTEST,
    flexDirection: "row",
    justifyContent: "center",
    width: 65
  },
  pickupTimeText: {
    fontSize: FONT.SIZE.MEDIUM,
    fontWeight: FONT.WEIGHT.MEDIUM,
    flex: 1,
    color: COLOURS.BLACK
  },
  locationsContainer: {
    paddingLeft: SPACING.LARGE,
    flex: 1
  },
  locationHeading: {
    color: COLOURS.BLACK,
    marginBottom: SPACING.SMALL
  }
});

export default Booking;
