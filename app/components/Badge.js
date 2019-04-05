import React from "react";
import { View, Text } from "react-native";
import { SPACING, FONT, BORDER_RADIUS } from "../styles";

const Badge = ({ text, variant }) => (
  <View
    style={{
      paddingVertical: SPACING.SMALLER,
      paddingHorizontal: SPACING.SMALL,
      backgroundColor: "red",
      borderRadius: BORDER_RADIUS,
      alignSelf: "flex-start"
    }}
  >
    <Text
      style={{
        color: "white",
        fontWeight: FONT.WEIGHT.MEDIUM,
        fontSize: FONT.SIZE.SMALLER,
        width: 100
      }}
    >
      {text}
    </Text>
  </View>
);

export default Badge;
