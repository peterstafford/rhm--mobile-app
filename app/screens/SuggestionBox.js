import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
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

export default () => {
  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    sendEmail(
      "kkoltz@rmhcsd.org",
      "Suggestion to Ronald McDonald House at San Diego",
      data.suggestion + "\n\n" + data.email
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
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
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
      <Text style={styles.label}>Suggestion</Text>
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
        name="suggestion"
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 0,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
