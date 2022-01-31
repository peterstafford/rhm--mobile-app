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
import { TouchableOpacity } from "react-native-gesture-handler";

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

function GuestFaqScreen({ navigation }) {
  //two top tabs Guests/Day Users
  //next: split this file into GuestFaqScreen.js and DayFaqScreen.js, TopTabs Navigation
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* About Us: */}
        <View style={styles.subContainer}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.header}>
            {"\t"} The Ronald McDonald House Charities of San Diego provides a
            “home-away-from-home” for families with children being treated for
            serious, often life-threatening conditions at local hospitals. The
            Ronald McDonald House relies on community support. It is the only
            service of its kind that is open to families caring for children at
            any San Diego area hospital.
          </Text>
          <Button
            onPress={() => openLink("https://rmhcsd.org/about-rmhcsd/")}
            title="Learn More"
          />
        </View>

        {/* Meals */}
        <View style={styles.subContainer}>
          <Text style={styles.title}>Meals</Text>
          <Text style={styles.header}>
            {"\t"}We provide three meals daily. Refrigerated and pantry items
            are available outside of meal times. Families are also welcome to
            use one of our six cooking stations to prepare their own meals or
            snacks.
          </Text>
          <Text style={styles.center}>
            Breakfast: 7am - 8am
            {"\n"}Lunch: 12pm - 1pm
            {"\n"}Dinner: 6pm - 7pm
          </Text>
          <Text style={styles.header}>
            {"\t"}Meals are free of charge to families with hospital-issued
            identification. This nourishment and comfort is possible thanks to
            generous charitable donations and the assistance of caring
            volunteers and groups.
          </Text>
        </View>

        {/* Amenities*/}
        <View style={styles.subContainer}>
          <Text style={styles.title}>Amenities/Services</Text>
          <View style={styles.amenitiesView}>
            <View style={styles.amenityView}>
              <Text style={styles.title2}>Lodging</Text>
              <Text style={styles.body}>
                {"\u2022"} Total of 70 rooms featuring queen, sofa, and/or
                ADA-accessible layouts available
                {"\n\u2022"} Bed, bath linens, some toiletries, and
                voicemail-enabled phones provided
                {"\n\u2022"} Most rooms feature automatic night lights, sound
                dampening, thermostat control, key card access, vanity/bath, and
                and courtyard-facing windows
              </Text>
            </View>

            {/*Laundry*/}
            <View style={styles.amenityView}>
              <Text style={styles.title2}>Laundry</Text>
              <Text style={styles.body}>
                {"\u2022"} Laundry soap is provided for your use and is
                connected to the machine. Please follow posted instructions on
                dispensing.
                {"\n\u2022"} There are general cleaning supplies and vacuums for
                guest use in the tall cabinets in each laundry room. After
                using, please return so another family can use the items.
              </Text>
            </View>
          </View>

          {/*Workout Room Instructions*/}
          <View style={styles.amenityView}>
            <Text style={styles.title2}>Workout Room</Text>
            <Text style={styles.body}>
              {"\u2022"} Only those 18 years and older are allowed inside the
              workout room.
              {"\n\u2022"} Your room key will open the workout room.
              {"\n\u2022"} Please make sure you sanitize before and after your
              workout.
              {"\n\u2022"} Closed toe shoes must be worn at all times while in
              workout room.
              {"\n\u2022"} Do not prop door open.
              {"\n\u2022"} Do not let anyone in workout room who doesn’t have
              access.
              {"\n\u2022"} All Day Users must go to the front desk prior to
              working out.
            </Text>
          </View>

          {/*Front Desk Services*/}
          <View style={styles.amenityView}>
            <Text style={styles.title2}>Front Desk Services</Text>
            <Text style={styles.body}>
              {"\u2022"} Toiletries and toilet paper
              {"\n\u2022"} Offsite trip sign-ups
              {"\n\u2022"} Thermal temperature screening
              {"\n\u2022"} General inquiries
              {"\n\u2022"} Salon sign-ups
            </Text>
          </View>

          <View style={styles.amenityView}>
            <Text style={styles.title2}>Education & Enrichment</Text>
            <Text style={styles.body}>
              {"\u2022"} Onsite TK-12 school, provided in partnership with San
              Diego Unified School District
            </Text>
          </View>
        </View>

        {/* Guest Check-In */}
        <View style={styles.subContainer}>
          <Text style={styles.title}>Guest Visitors</Text>
          <Text style={styles.header}>
            {/* situated in tinted-ish blurb */}
            {"\t"} All visitors must check in at the front desk. Visitors can
            arrive as early as 7am and must leave no later than 10pm the same
            day. Visitors are required to wear a visitor’s sticker and go
            through health screening at time of entry.
          </Text>
        </View>

        {/* Appreciate the stay? */}
        <View style={styles.subContainer}>
          <Text style={styles.title}>Donate</Text>
          <Text style={styles.header}>
            {"\t"} Enjoy the stay? Consider donating to support future families
            and patients.
          </Text>
          <Button
            onPress={() => openLink("https://rmhcsd.org/donate/")}
            title="Donate"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  subContainer: {
    flex: 1,
    marginVertical: 5,
  },
  amenitiesView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
  },
  amenityView: {
    flex: 1,
  },
  amenityScroll: {
    flex: 1, //have to keep
    height: "40%",
  },
  title: {
    fontSize: 20,
    backgroundColor: colors.quarternary,
    marginVertical: 5,
  },
  title2: {
    fontStyle: "italic",
    fontSize: 15,
    marginVertical: 5,
  },
  header: {
    fontStyle: "italic",
  },
  body: {
    fontSize: 15,
    marginLeft: 10,
  },
  bullet: {
    margin: 10,
  },
  center: {
    textAlign: "center",
    marginHorizontal: 50,
    marginVertical: 5,
  },
  link: {
    color: "blue",
    fontSize: 15,
  },
});
export default GuestFaqScreen;
