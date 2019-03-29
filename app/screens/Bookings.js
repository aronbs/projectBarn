import React, { Component } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { withNavigation, NavigationActions } from "react-navigation";
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
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Typography.Heading>Today</Typography.Heading>
        <Booking
          pickupTime="8:10"
          pickupLocation="Somewhere over here, Manchester, United Kingdom"
          dropoffLocation="Somewhere over there, Stockport, United Kingdom"
          onPress={() =>
            navigation.dispatch(
              NavigationActions.navigate({ routeName: "BookingDetail" })
            )
          }
        />
      </View>
    );
  }
}

export default withNavigation(BookingsScreen);
