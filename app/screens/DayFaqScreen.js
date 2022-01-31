import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

//make bulleted list? //colors too
function DayFaqScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Hours */}
        <Text style={styles.title}>Daily Hours</Text>
        <Text style={styles.body}> {"\t"}7:00am - 9:00pm</Text>

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

        {/* Laundry */}
        <Text style={styles.title}>Laundry</Text>
        <Text style={styles.body}>
          {"\t"} Laundry soap is provided for your use and is connected to the
          machine. Please follow posted instructions on dispensing. Do not leave
          your laundry at any time. We are not responsible for your laundry.
        </Text>

        {/* Front Desk*/}
        <Text style={styles.title}>What's at the Front Desk?</Text>
        <Text style={styles.body}>
          {"\u2022"} Toiletries
          {"\n\u2022"} Emergency Clothes
          {"\n\u2022"} Thermal temperature screening & wellness check
          {"\n\u2022"} General inquiries
          {"\n\u2022"} Salon Sign-ups
          {"\n\u2022"} Towels
        </Text>

        {/* Workout Room */}
        <Text style={styles.title}>Workout Room</Text>
        <Text style={styles.body}>
          {"\t"} You must fill out the Workout Room Liability form prior to your
          first visit. Please make sure you sanitize before and after your
          workout. Closed toe shoes must be worn at all times while in workout
          room. Do not prop door open. The front desk will let you in the
          workout room. Please do not ask those already inside or other families
          to let you in.{" "}
        </Text>

        {/* House History */}
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.header}>
          {"\t"} The Ronald McDonald House Charities of San Diego provides a
          “home-away-from-home” for families with children being treated for
          serious, often life-threatening conditions at local hospitals. The
          Ronald McDonald House relies on community support. It is the only
          service of its kind that is open to families caring for children at
          any San Diego area hospital.
        </Text>

        {/* Amenitiies */}
        <Text style={styles.title}>Amenities</Text>
        <Text style={styles.body}>
          {"\u2022"} San Diego Padres & Fowler Family Playroom
          {"\n\u2022"} Outdoor play spaces
          {"\n\u2022"} Day resting rooms for naps
          {"\n\u2022"} Outdoor play spaces
        </Text>
      </ScrollView>
    </View>
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
export default DayFaqScreen;
