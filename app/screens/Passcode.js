import React, { useEffect, useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { COLOURS, SPACING, FONT } from "../styles";
import Button from "../components/Button";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.LARGE
  },
  passcodeContainer: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  passcodeItem: {
    flexDirection: "row",
    alignItems: "center",
    width: SPACING.LARGE,
    height: SPACING.LARGE,
    margin: SPACING.LARGER / 2,
    borderRadius: 100 / 2,
    justifyContent: "center",
    backgroundColor: COLOURS.PRIMARY
  },
  gridContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  gridRow: {
    flex: 1,
    flexDirection: "row"
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    fontSize: SPACING.LARGE,
    justifyContent: "center"
  },
  gridItemValue: {
    fontWeight: FONT.WEIGHT.REGULAR,
    fontSize: FONT.SIZE.LARGER
  },
  gridIcon: {
    paddingRight: SPACING.MEDIUM
  }
});

const Passcode = () => {
  const [passcode, setPasscode] = useState([]);

  const updatePasscode = (value = null) =>
    value || value === 0
      ? setPasscode(pc => [...pc, value])
      : setPasscode(pc => pc.splice(0, pc.length - 1));

  useEffect(() => {
    if (passcode.length === 6) {
      Alert.alert(JSON.stringify("hit"));
    }
  }, [passcode]);

  const {
    container,
    passcodeContainer,
    passcodeItem,
    gridContainer,
    gridRow,
    gridItem,
    gridItemValue,
    gridIcon
  } = styles;

  return (
    <View style={container}>
      <StatusBar barStyle="light-content" />
      {/* <Typography.Heading>Enter Passcode</Typography.Heading> */}

      <View style={passcodeContainer}>
        {passcode.map(() => (
          <View style={passcodeItem} />
        ))}
      </View>

      <View style={gridContainer}>
        <View style={gridRow}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(1)}
          >
            <Text style={gridItemValue}>1</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(2)}
          >
            <Text style={gridItemValue}>2</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(3)}
          >
            <Text style={gridItemValue}>3</Text>
          </TouchableHighlight>
        </View>

        <View style={gridRow}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(4)}
          >
            <Text style={gridItemValue}>4</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(5)}
          >
            <Text style={gridItemValue}>5</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(6)}
          >
            <Text style={gridItemValue}>6</Text>
          </TouchableHighlight>
        </View>

        <View style={gridRow}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(7)}
          >
            <Text style={gridItemValue}>7</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(8)}
          >
            <Text style={gridItemValue}>8</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(9)}
          >
            <Text style={gridItemValue}>9</Text>
          </TouchableHighlight>
        </View>

        <View style={gridRow}>
          <View style={gridItem} />
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode(0)}
          >
            <Text style={gridItemValue}>0</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={1}
            underlayColor="#f9f9f9"
            style={gridItem}
            onPress={() => updatePasscode()}
          >
            <Icon
              name="delete"
              size={24}
              color={COLOURS.GRAYSCALE_DARK}
              style={gridIcon}
            />
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <Button title="Login" type="Secondary" onPress={() => null} />
      </View>
    </View>
  );
};

export default Passcode;
