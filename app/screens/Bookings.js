import React, { Component } from "react";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import { withNavigation, NavigationActions } from "react-navigation";
import Booking from "../components/Booking";
import Typography from "../components/Typography";
import { COLOURS, SPACING } from "../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.GRAYSCALE_LIGHTER,
    flex: 1,
    padding: SPACING.MEDIUM
  }
});

const FAKE_BOOKINGS = [
  {
    pickupTime: "8:10",
    pickupLocation: "Somewhere over here, Manchester, United Kingdom",
    dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  },
  {
    pickupTime: "8:10",
    pickupLocation: "Somewhere over here, Manchester, United Kingdom",
    dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  },
  {
    pickupTime: "8:10",
    pickupLocation: "Somewhere over here, Manchester, United Kingdom",
    dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  },
  {
    pickupTime: "8:10",
    pickupLocation: "Somewhere over here, Manchester, United Kingdom",
    dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  },
  {
    pickupTime: "8:10",
    pickupLocation: "Somewhere over here, Manchester, United Kingdom",
    dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  },
  {
    pickupTime: "8:10",
    pickupLocation: "Somewhere over here, Manchester, United Kingdom",
    dropoffLocation: "Somewhere over there, Stockport, United Kingdom"
  }
];

class BookingsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLOURS.PRIMARY} />
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
      </ScrollView>
    );
  }
}

export default withNavigation(BookingsScreen);
