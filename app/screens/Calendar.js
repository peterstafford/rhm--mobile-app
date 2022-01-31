import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  Button,
} from "react-native";
import colors from "../config/colors";

function openLink(url) {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert(`Can't handle url:  ${url}`);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => Alert.alert(`An error occurred: ${err}`));
}

function DonationScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{DonationInfo.title}</Text>
      </View>
      <View style={styles.linkTextView}>
        <Text style={styles.linkText}></Text>
      </View>
    </ScrollView>
  );
}

const DonationInfo = {
  title: "Coming Soon",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quaternary,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default DonationScreen;
