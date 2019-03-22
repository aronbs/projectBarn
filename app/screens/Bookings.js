import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Booking from "../components/Booking";
import { COLOURS } from "../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.GRAYSCALE_LIGHTEST,
    flex: 1
  }
});

class BookingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Booking
          pickupTime="8:10 AM"
          pickupLocation="Somewhere over here"
          dropoffLocation="Somewhere over there"
        />
      </View>
    );
  }
}

export default BookingsScreen;
