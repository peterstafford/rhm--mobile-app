import React from "react";
import { View, StyleSheet } from "react-native";
import ZoomImage from '../components/ZoomImage';
import colors from "../config/colors";

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

const map = require("../assets/localmap.jpg");

//hidden BottomTabBar
function LocalMapScreen(props) {
  return (
    <View style={styles.container}>
      <ZoomImage style={styles.image} source={map} />
    </View>
  );
}

export default LocalMapScreen;
