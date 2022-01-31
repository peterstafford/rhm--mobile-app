import * as React from "react";
import { Text, ScrollView, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import qs from "qs";
import { Linking } from "react-native";
import colors from "../config/colors";


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

function StoryBox({ navigation }) {
  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    const text = data.name;
    text += "\n\n" + data.email;
    text += "\n\n" + data.phoneNumber;
    text += "\n\n" + data.day;
    text += "\n\n" + data.story1;
    text += "\n\n" + data.story2;
    text += "\n\n" + data.story3;
    text += "\n\n" + data.story4;
    text += "\n\n" + "Signature: " + data.agreement;

    sendEmail(
      "kkoltz@rmhcsd.org",
      "Suggestion to Ronald McDonald House at San Diego",
      text
    ).then(() => {
      console.log("Email successful provided to device mail ");
    });
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <ScrollView>
      <View style={styles.title}>
        <Text style={styles.titleText}>Share Your Story</Text>
        <Text style={styles.label}>
          From time to time, we like to share Ronald McDonald House of San Diego stories. 
          Please take a moment and tell us more about your experience here. 
          Our donors and volunteers are eager to hear how their support made a difference to you.
          {"\n"}{"\n"}
        </Text>
      </View>

      <Text style={styles.label}>Full Name</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="name"
      />

      <Text style={styles.label}>Email Address</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
      />

      <Text style={styles.label}>Phone Number</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="phoneNumber"
      />

      <Text style={styles.label}>Date of Stay at RMHD</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="day"
      />

      <Text style={styles.label}>
        What is your child's diagnosis/story? 
        How is he/she doing now? Please be as descriptive as possible.
      </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="story1"
      />

      <Text style={styles.label}>
        What would you say about RMHD to our supporters (donors, volunteers, those who read our newsletter) 
        and/or the experience you had while you were here?
      </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="story2"
      />

      <Text style={styles.label}>
        What did you enjoy most about your stay at RMHD or what was your favorite memory?
      </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="story3"
      />

      <Text style={styles.label}>
        Anything else you would like to add about your stay at RMHD?
      </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="story4"
      />

      <Text style={styles.label}>
        Ronald McDonald House® of San Diego Statement and Likeness Release Agreement
        {"\n"}{"\n"}
        I hereby grant to Ronald McDonald House® of San Diego, or anyone authorized by them, my full permission, 
        irrevocably and in perpetuity, the right, license, and privilege to use, reproduce, represent, exhibit, 
        transmit, and simulate the undersigned’s, and/or my child’s, name, likeness, photograph, and statements 
        worldwide, in any manner and form and by any method and process and through any media now or hereafter 
        known or devised. I guarantee that the statements given by me reflect my true experience with Ronald 
        McDonald House. And, I agree that my statements may be reasonably edited. 
        {"\n"}{"\n"}
        Personal Approval: Type your name to approve.
      </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="agreement"
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    height: 40,
    backgroundColor: "#EE82EE",
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    color: colors.quaternary,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
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
});

export default StoryBox;
