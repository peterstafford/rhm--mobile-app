import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import qs from "qs";
import { Linking } from "react-native";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import shortValidation from "../vaidations/shortvalidations";
import userServices from "../../services/userService";

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

function Consent({ navigation }) {
  const showAlert = (title, alertMessage) =>
    Alert.alert(title, alertMessage, {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={{ marginTop: 30 }}>
        <View style={styles.box}>
          <Text style={styles.titleText}>VCS Waivier</Text>
          <Text style={styles.text}>
            By pressing accept below, you consent to Ronald McDonald House ’s
            use of the information you provide by means of this automated app
            for purposes of monitoring your health (and other family members) as
            it applies to the Covid 19 virus reporting requirements. Thank you
            for helping us to keep our campus safe. Please review your
            data/wireless plan for any applicable charges and your rights under
            the&nbsp;
            <Text
              style={styles.linkText}
              onPress={() => openLink("https://www.oag.ca.gov/privacy/ccpa")}
            >
              California Consumer Privacy Act(CCPA) | State of California -
              Department of Justice - Office of the Attorney General.
            </Text>
          </Text>
          <Text style={{ marginTop: 10 }}>
            Additional privacy information can be found here:{" "}
            <Text
              style={styles.linkText}
              onPress={() =>
                openLink("https://safebusinesssolutions.com/privacy-policy")
              }
            >
              Privacy Policy | Safe Business Solutions Through Customer Service
            </Text>
          </Text>
          <Text style={styles.optoutText}>
            To Opt out do not accept and provide your information
          </Text>
        </View>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            recieveEmail: "",
          }}
          validationSchema={shortValidation.newConsentFormValidation}
          onSubmit={(values, actions) => {
            userServices
              .addUser({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                recieveEmail: values.recieveEmail,
              })
              .then((res) => {
                navigation.navigate("Home");
                showAlert("Success", "User Registered Successfully");
              })
              .catch((err) => {
                console.log("Error", err);
                showAlert("Error", err.response.data);
              });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
            errors,
          }) => (
            <>
              <Text style={styles.label}>Last Name</Text>

              <TextInput
                style={styles.input}
                onBlur={() => handleBlur("lastName")}
                onChangeText={(value) => {
                  setFieldValue("lastName", value);
                }}
              />
              {errors.lastName && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.lastName}
                </Text>
              )}

              <Text style={styles.label}>First Name</Text>

              <TextInput
                style={styles.input}
                onBlur={() => handleBlur("firstName")}
                onChangeText={(value) => {
                  setFieldValue("firstName", value);
                }}
              />
              {errors.firstName && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.firstName}
                </Text>
              )}

              <Text style={styles.label}>Email</Text>

              <TextInput
                style={styles.input}
                onBlur={() => handleBlur("email")}
                onChangeText={(value) => {
                  setFieldValue("email", value);
                }}
              />
              {errors.email && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.email}
                </Text>
              )}

              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                  setFieldValue("recieveEmail", "Yes");
                }}
              >
                <View style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Accept
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },
  box: {
    margin: 20,
  },
  text: {},
  titleText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "600",
  },
  linkText: {
    // fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    color: "blue",
    marginLeft: 20,
    marginRight: 20,
  },
  optoutText: {
    padding: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderWidth: 2,
  },
  label: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    height: 40,
    backgroundColor: "#69B918",
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Consent;
