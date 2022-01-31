import * as React from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Linking } from "react-native";
import colors from "../config/colors";

import { MaterialIcons } from "@expo/vector-icons";

function QuestionaireCompleted({ navigation }) {
  const { register, setValue, handleSubmit, control } = useForm();

  return (
    <ScrollView>
      <View style={styles.box}>
        <View
          style={{
            backgroundColor: "#69B918",
            borderRadius: 25,
            padding: 10,
            marginBottom: 20,
          }}
        >
          <MaterialIcons name="done" size={24} color="white" />
        </View>
        <Text style={styles.titleText}>Thank You For Your Answers</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Ok</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    margin: 20,
    borderWidth: 1,
    borderColor: "#0002",
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

export default QuestionaireCompleted;
