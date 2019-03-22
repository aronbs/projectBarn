import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Booking from "../components/Booking";
import Typography from "../components/Typography";
import { COLOURS, SPACING } from "../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.GRAYSCALE_LIGHTER,
    flex: 1,
    padding: SPACING.LARGE
  }
});

class BookingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Typography.Heading>Today</Typography.Heading>
        <Booking
          pickupTime="8:10"
          pickupLocation="Somewhere over here"
          dropoffLocation="Somewhere over there"
        />
      </View>
    );
  }
}

export default BookingsScreen;
