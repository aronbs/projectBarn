import React, { PureComponent } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  label: {
    color: "#707070",
    fontWeight: "600"
  },
  labelFocused: {
    color: "#0077cc"
  },
  labelError: {
    color: "#e21111"
  },
  input: {
    width: "100%",
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#ededed"
  },
  error: {
    width: "100%",
    paddingTop: 4,
    color: "#e21111",
    paddingBottom: 4
  }
});

class InputText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error) {
    }
  }

  onFocus = () => this.setState({ focused: true });

  render() {
    const {
      autoFocus,
      error,
      keyboardType,
      label,
      onBlur,
      onChangeText,
      touched,
      value
    } = this.props;
    const { focused } = this.state;

    return (
      <View>
        <Text
          style={[
            styles.label,
            focused && styles.labelFocused,
            error && styles.labelError
          ]}
        >
          {(touched && error && error) || label}
        </Text>

        <View>
          <TextInput
            selectionColor="#0077cc"
            value={value}
            onBlur={onBlur}
            placeholder={label}
            style={styles.input}
            autoFocus={autoFocus}
            onFocus={this.onFocus}
            onChangeText={onChangeText}
            keyboardType={keyboardType || "default"}
          />
        </View>
      </View>
    );
  }
}

export default InputText;
