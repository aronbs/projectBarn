import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from "react-native-maps-directions";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill
  },
  map: {
    ...StyleSheet.absoluteFill
  }
});

class Map extends PureComponent {
  state = {
    region: {
      latitude: 53.481253,
      longitude: -2.239964,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  componentDidMount() {
    //this.getCurrentPosition();
  }

  setRegion(region) {
    this.setState({ region });
  }

  onMapReady = e => {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  };

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          };
          this.setRegion(region);
        },
        error => {
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert("");
              } else {
                Alert.alert("");
              }
              break;
            default:
              Alert.alert("", "Error detecting location");
          }
        }
      );
    } catch (e) {
      alert(e.message || "");
    }
  }

  render() {
    const origin = { latitude: 53.48191, longitude: -2.239223 };
    const destination = { latitude: 53.48834, longitude: -2.237406 };
    const API_KEY = "AIzaSyCwQF134etMkVihzA74KpMLhZUCt01x3jA";
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.region}
          onMapReady={this.onMapReady}
        >
          <Marker coordinate={origin} title="Origin" description="desc" />
          <Marker
            coordinate={destination}
            title="Destination"
            description="desc"
          />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={API_KEY}
            strokeWidth={3}
            strokeColor="red"
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
