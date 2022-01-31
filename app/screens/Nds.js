import * as React from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import qs from "qs";
import { Linking } from "react-native";

async function sendEmail(to, subject, body, options = {}) {
  const { cc, bcc } = options;
  let url = `mailto:${to}`;
  const query = qs.stringify({
    subject: subject,
    body: body,
    cc: cc,
    bcc: bcc,
  });
  if (query.length) {
    url += `?${query}`;
  }

  const canOpen = await Linking.canOpenURL(url);
  if (!canOpen) {
    throw new Error("Provided URL can not be handled");
  }
  return Linking.openURL(url);
}

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

function Nds({ navigation }) {
  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    navigation.navigate("Home");
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text>
          Welcome! We are pleased to have you as a guest of at our facilities.
        </Text>
        <Text style={[styles.titleText, styles.mt10]}>
          Health and safety instructions
        </Text>
        <Text style={styles.text}>
          Throughout your visit your personal safety is our concern. We
          therefore request that you abide by the following:
          <Text>
            {"\n\u2022"}Access to the premises is only allowed when accompanied
            by a company name employee
          </Text>
          <Text>
            {"\n\u2022"}Visitor badge must be worn at all times and should be
            returned to Reception upon departure
          </Text>
          <Text>
            {"\n\u2022"}In the event of an emergency, all visitors must leave
            the premises immediately via the nearest safe exit and report to the
            designated assembly point
          </Text>
          <Text>
            {"\n\u2022"}Visitors are prohibited from capturing images
            (photographs and videos) of anything inside the premises or
            surrounding facility grounds{" "}
          </Text>
          <Text>
            {"\n\u2022"}Smoking is strictly prohibited inside the building
          </Text>
          <Text
            style={styles.linkText}
            onPress={() => openLink("https://google.com")}
          >
            California Consumer Privacy Act(CCPA) | State of California -
            Department of Justice - Office of the Attorney General.
          </Text>
        </Text>
        <Text style={[styles.titleText, styles.ndstext]}>
          Non-Disclosure Agreement{" "}
        </Text>
        <Text style={{ marginTop: 10 }}>
          During your visit to Company_Name's facility, you may learn and/or
          have disclosed to you proprietary or confidential information
          (including, without limitations, information relating to technology,
          processes, equipment, drawings and specifications) which are not
          generally known to the public (hereinafter collectively called
          "Confidential Information").
        </Text>
        <Text style={styles.mt10}>
          In consideration of your permission to visit Company_Name's facility
          and for the courtesies extended to you during your visit, you agree I
          agree that you will not, either;{" "}
        </Text>
        <Text style={styles.mt10}>
          (a) Disclose or otherwise make available to others any Confidential
          Information disclosed to you during this and any subsequent visit; or
        </Text>
        <Text style={styles.mt10}>
          (b) Use or assist others in using or further developing in any manner
          any confidential information.
        </Text>
        <Text style={styles.mt10}>
          (c) Use cameras or video technology to disclose confidential
          information.
        </Text>
        <Text style={styles.mt10}>
          By signing into the facility, you acknowledge and understand the
          Health and Safety Instructions and Non-Disclosure Agreement posted.
        </Text>
      </View>
    </ScrollView>
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
  ndstext: {
    marginTop: 20,
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
    marginTop: 15,
    marginBottom: 15,
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
  mt10: {
    marginTop: 10,
  },
});

export default Nds;
