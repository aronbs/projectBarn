import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Typography from "../components/Typography";
import Map from "../components/Map";
import { COLOURS, SPACING } from "../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.GRAYSCALE_LIGHTER,
    flex: 1,
    padding: SPACING.LARGE
  }
});

class BookingDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Typography.Heading>Details</Typography.Heading>

        <Map />
      </View>
    );
  }
}

export default BookingDetailScreen;
