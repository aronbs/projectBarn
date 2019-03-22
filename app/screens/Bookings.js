import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Booking from "../components/Booking";

const styles = StyleSheet.create({ container: {} });

class BookingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Booking />
      </View>
    );
  }
}

export default BookingsScreen;
