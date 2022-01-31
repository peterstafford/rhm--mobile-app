import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function WifiInfoScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Wi-Fi Instructions</Text>
        <Text style={styles.header}>
          {"\t"} The Ronald McDonald House offers high-speed Wi-Fi wireless
          Internet. Use your Wi-Fi enabled device to check email and get online!
        </Text>

        <Text style={styles.title}>To get connected:</Text>
        <Text style={styles.body}>
          {"\u2022"} Turn on your Wi-Fi, if it isn’t already.
          {"\n\u2022"} Go to your Settings on your Smart Device and go to Wi-Fi.
          {"\n\u2022"} Choose RMH-Guest from your choices, and your device
          should now be connected.
        </Text>

        <Text style={styles.title}>Connection tips: </Text>
        <Text style={styles.header}>If you are having trouble connecting:</Text>
        <Text style={styles.body}>
          {"\u2022"} Wireless users may need to configure the SSID or Network
          Name to “RMH-Guest”.
          {"\n\u2022"} Disable any VPN, proxy or firewall software that may be
          running.
          {"\n\u2022"} Open your browser and you should see the RMH-Guest login
          Welcome Page; select the connection option.
        </Text>

        <Text style={styles.title}>Support: </Text>
        <Text style={styles.header}>
          For technical support, please see the front desk.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    fontStyle: "italic",
    fontSize: 14,
  },
  center: {
    textAlign: "center",
    marginVertical: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  subContainer: {
    flex: 1,
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  dayFAQ: {
    flex: 1,
    backgroundColor: "lightsteelblue",
  },
  subContainer: {
    flex: 1,
    marginVertical: 5,
  },
});

export default WifiInfoScreen;
