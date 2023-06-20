import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Linking,
  Alert,
} from "react-native";
import colors from "../config/colors";
import ZoomImage from '../components/ZoomImage';
const volunteerImage = require("../assets/v.png");
const istyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      resizeMode: "contain",
      height: 1000 / 4,
      width: 1400 / 4,
    },
  });
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
const handlePhonePress = (phoneNumber) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

//add Text Input form? (Alerts/Requests)
function Volunteer({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{contactInfo.title}</Text>
      </View>
      <View>
        <Text style={styles.nameText}>{"Ronald McDonald House Charities® of San Diego (RMHC-SD) is fortunate to have a vibrant volunteer team supporting guest families and staff at the House. With a variety of ways that people can serve here, volunteers easily tap into their skills and interests to get involved."}</Text>
        <Text style={styles.addressText}>{"After staying at the House, many former guests want to return the kindness they received during their stay. Volunteering is a tangible, rewarding experience that directly supports other guest families, House operations, and the San Diego community."}</Text>
        <Text style={styles.addressText}>{"If you would like more information about volunteering at RMHC-SD, send an email to"}</Text>
        <Text
          onPress={() => openLink("mailto:volunteer@rmhcsd.org")}
          style={styles.linkText}
        >
          {"volunteer@rmhcsd.org"}
        </Text>
        <Text>{" or call "}</Text>
        <TouchableOpacity onPress={() => handlePhonePress("858-598-2414")}>
          <Text style={styles.phoneText}>
            {"858-598-2414"}
          </Text>
        </TouchableOpacity>

        <ZoomImage
        style={istyles.image}
        source={volunteerImage}
        />
      </View>
     
    </ScrollView>
  );
}

const contactInfo = {
  title: "Volunteer",
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

export default Volunteer;
