import React from "react";
import { View, StyleSheet } from "react-native";
import ZoomImage from '../components/ZoomImage';
import colors from "../config/colors";
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    resizeMode: "contain",
    height: 1163 / 5,
    width: 1580 / 5,
  },
});
const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
const map = require("../assets/localmap.jpg");

//hidden BottomTabBar
function LocalMapScreen(props) {
  const initialRegion = {
    latitude: 32.797853866678864,
    longitude: -117.15037831346157,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <MapView style={mapStyles.map} initialRegion={initialRegion}>
        <Marker coordinate={initialRegion} />
      </MapView>
    </View>
  );
}

export default LocalMapScreen;
