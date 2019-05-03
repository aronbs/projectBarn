import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLOURS, SPACING } from "../styles";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  content: {
    flex: 1
  },
  label: {
    fontSize: 16,
    color: COLOURS.BLACK
  },
  text: {
    marginTop: SPACING.SMALLER,
    fontSize: 14,
    color: COLOURS.GRAYSCALE_DARK
  }
});

const ListItem = ({ label, text, onPress, selected = false }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.row}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
      {selected && (
        <View style={styles.selected}>
          <Icon name="check" size={20} color={COLOURS.PRIMARY} />
        </View>
      )}
    </View>
  </TouchableHighlight>
);

export default ListItem;
