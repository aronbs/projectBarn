import React from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
import { NavigationActions } from "react-navigation";

import ListItem from "../components/ListItem";
import Typography from "../components/Typography";
import { SPACING, COLOURS } from "../styles";

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: SPACING.LARGE,
    paddingVertical: SPACING.MEDIUM,
    backgroundColor: COLOURS.GRAYSCALE_LIGHTEST
  },
  listContainer: {
    backgroundColor: COLOURS.GRAYSCALE_LIGHTEST
  }
});

const SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.titleContainer}>
      <Typography.Body>General</Typography.Body>
    </View>
    <View style={styles.listContainer}>
      <ListItem
        label="Language"
        text="English"
        onPress={() =>
          navigation.dispatch(
            NavigationActions.navigate({ routeName: "SettingsLanguage" })
          )
        }
      />
      <ListItem
        label="Name"
        text="Kieran Chadwick"
        onPress={() =>
          navigation.dispatch(
            NavigationActions.navigate({ routeName: "SettingsDriverName" })
          )
        }
      />
    </View>
  </View>
);

export default SettingsScreen;
