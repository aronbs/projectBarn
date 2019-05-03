import React, { PureComponent } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

import ListItem from "../../components/ListItem";

const LANGUAGES = [
  { label: "English" },
  { label: "Nederlands" },
  { label: "Cestina" },
  { label: "Deutsch" },
  { label: "Espanol" },
  { label: "Portugues" },
  { label: "Portugues" },
  { label: "Portugues" },
  { label: "Portugues" },
  { label: "Portugues" },
  { label: "Portugues" },
  { label: "Portugues" },
  { label: "Espanol" },
  { label: "Espanol" },
  { label: "Espanol" },
  { label: "Espanol" }
];

const styles = StyleSheet.create({});

class SettingsScreen extends PureComponent {
  state = {
    selectedIndex: 0
  };

  handleLanguagePress = index => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />

        {LANGUAGES.map(({ label }, index) => (
          <ListItem
            key={index}
            label={label}
            onPress={() => this.handleLanguagePress(index)}
            selected={index === selectedIndex}
          />
        ))}
      </ScrollView>
    );
  }
}

export default SettingsScreen;
