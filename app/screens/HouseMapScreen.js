import React, { useState } from "react";
import { ScrollView, Image, View, StyleSheet, Modal, TouchableWithoutFeedback, Text } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import ImageViewer from 'react-native-image-zoom-viewer';
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
    height: 1000 / 4,
    width: 1400 / 4,
  },
});

const map = require("../assets/housemap.png");

function HouseMapScreen(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <ZoomImage
        style={styles.image}
        source={map}
      />
    </View>
  );
}

export default HouseMapScreen;
