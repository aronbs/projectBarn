import React, { Component } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { withNavigation, NavigationActions } from "react-navigation";
import Booking from "../components/Booking";
import Typography from "../components/Typography";
import { COLOURS, SPACING } from "../styles";
import EmptyState from "../components/EmptyState";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.GRAYSCALE_LIGHTER,
    flex: 1,
    paddingVertical: SPACING.LARGE,
    paddingHorizontal: SPACING.MEDIUM
  }
});

const FAKE_BOOKINGS = [
  // {
  //   pickupTime: "8:10",
  //   pickupLocation: "Somewhere over here, Manchester, United Kingdom",
  //   dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  // },
  // {
  //   pickupTime: "8:10",
  //   pickupLocation: "Somewhere over here, Manchester, United Kingdom",
  //   dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  // },
  // {
  //   pickupTime: "8:10",
  //   pickupLocation: "Somewhere over here, Manchester, United Kingdom",
  //   dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  // },
  // {
  //   pickupTime: "8:10",
  //   pickupLocation: "Somewhere over here, Manchester, United Kingdom",
  //   dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  // },
  // {
  //   pickupTime: "8:10",
  //   pickupLocation: "Somewhere over here, Manchester, United Kingdom",
  //   dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  // },
  // {
  //   pickupTime: "8:10",
  //   pickupLocation: "Somewhere over here, Manchester, United Kingdom",
  //   dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  // }
];

class BookingsScreen extends Component {
  render() {
    const { navigation } = this.props;
    var bookings = [];

    for (let i = 0; i < FAKE_BOOKINGS.length; i++) {
      bookings.push(
        <Booking
          key={i}
          pickupTime={FAKE_BOOKINGS[i].pickupTime}
          pickupLocation={FAKE_BOOKINGS[i].pickupLocation}
          dropoffLocation={FAKE_BOOKINGS[i].dropoffLocation}
          onPress={() =>
            navigation.dispatch(
              NavigationActions.navigate({ routeName: "BookingDetail" })
            )
          }
        />
      );
    }
    if (FAKE_BOOKINGS.length > 0) {
      return (
        <ScrollView style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLOURS.PRIMARY}
          />
          <Typography.Heading>Today</Typography.Heading>
          {bookings}
        </ScrollView>
      );
    } else {
      return <EmptyState />;
    }
  }
}

export default withNavigation(BookingsScreen);
