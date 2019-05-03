import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOURS, SPACING } from "../styles";
import Typography from "../components/Typography";
import Icon from "react-native-vector-icons/Feather";

const EmptyState = () => {
  const styles = StyleSheet.create({
    empty_content: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    empty_content_text: {
      flex: 1,
      alignItems: "center",
      padding: SPACING.LARGEST
    },
    empty_content_calendar: {
      padding: SPACING.LARGE
    },
    empty_content_description: {
      flex: 1,
      textAlign: "center",
      padding: SPACING.LARGE
    }
  });
  return (
    <View style={styles.empty_content}>
      <View style={styles.empty_content_text}>
        <Icon
          style={styles.empty_content_calendar}
          name="calendar"
          size={50}
          color={COLOURS.GRAYSCALE}
        />
        <Typography.Heading>No trips scheduled yet</Typography.Heading>
        <Typography.Body>
          <Text style={styles.empty_content_description}>
            When you dispatch assigns you rides, they will appear here. Or you
            can enter your own rides manually.
          </Text>
        </Typography.Body>
      </View>
    </View>
  );
};

export default EmptyState;
