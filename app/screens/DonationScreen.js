import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  Button
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
      <View>
        <Text
          onPress={() => openLink(DonationInfo.website.url)}
          style={styles.linkText}
        >
          {DonationInfo.website.text}
        </Text>
      </View>
    </ScrollView>
  );
}

const DonationInfo = {
  title: "Donate",
  website: {
    text: "Emergency Family Care Fund",
    url: "https://p2p.onecause.com/familycarefund/challenge",
  },
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
    marginLeft: 20,
    marginRight: 20,
  },
  linkText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    color: "blue",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default DonationScreen;