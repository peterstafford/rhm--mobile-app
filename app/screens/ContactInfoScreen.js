import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  Alert,
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

//add Text Input form? (Alerts/Requests)
function ContactInfoScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{contactInfo.title}</Text>
      </View>
      <View>
        <Text style={styles.nameText}>{contactInfo.houseName}</Text>
        <Text style={styles.addressText}>{contactInfo.address}</Text>
        <Text style={styles.phoneText}>
          {contactInfo.phoneNumber.text + contactInfo.phoneNumber.number}
        </Text>
        <Text style={styles.phoneText}>
          {contactInfo.faxNumber.text + contactInfo.faxNumber.number}
        </Text>
        <Text
          onPress={() => openLink(contactInfo.website.url)}
          style={styles.linkText}
        >
          {contactInfo.website.text}
        </Text>
        <Text
          onPress={() => openLink(contactInfo.email.url)}
          style={styles.linkText}
        >
          {contactInfo.email.text}
        </Text>
        <Text style={styles.phoneText}>
          {contactInfo.guestNumber.text + contactInfo.guestNumber.number}
        </Text>
        <Text style={styles.phoneText}>
          {contactInfo.volunteerNumber.text +
            contactInfo.volunteerNumber.number}
        </Text>
      </View>
     
    </ScrollView>
  );
}

const contactInfo = {
  title: "Contact Us",
  houseName: "Ronald McDonald House Charities® of San Diego, Inc.",
  address: "2929 Children’s Way\nSan Diego, CA 92123",
  phoneNumber: {
    text: "Phone: ",
    number: "858-467-4750",
  },
  faxNumber: {
    text: "Fax: ",
    number: "858-467-4757",
  },
  guestNumber: {
    text: "Guest Services: ",
    number: "858-598-2401",
  },
  volunteerNumber: {
    text: "Volunteer Services/Meal Program: ",
    number: "858-598-2430",
  },
  website: {
    text: "www.rmhcsd.org",
    url: "http://www.rmhcsd.org/",
  },
  email: {
    text: "rmhcsd@rmhcsd.org",
    url: "mailto:rmhcsd@rmhcsd.org",
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
  nameText: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  addressText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
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
  phoneText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ContactInfoScreen;
