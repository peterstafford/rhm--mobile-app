import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import moment from "moment";

import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import qs from "qs";
import { Linking } from "react-native";
import EventService from "../../services/eventService";

function SingleEvent({ navigation, route }) {
  const [data, setDataa] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = route.params;

  useEffect(() => {
    setLoading(false);
    getEventsFunction();
  }, [params.id]);

  const getEventsFunction = () => {
    EventService.getSingleEvents(params.id)
      .then((res) => {
        console.log("respone", res);

        setDataa(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <TouchableOpacity
        style={{
          width: 80,
          margin: 10,
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      {loading ? (
        <>
          <ScrollView>
            <Card>
              <Card.Title>{data.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0, marginBottom: 10 }}
                source={{
                  uri: `${data.image}`,
                }}
              />
              <Text style={{ marginBottom: 10 }}>{data.description}</Text>
              <Card.Divider />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title style={{ fontSize: 10, textAlign: "left" }}>
                  Starting Date
                </Card.Title>

                <Card.Title style={{ fontSize: 10, textAlign: "right" }}>
                  Ending Date
                </Card.Title>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: -12,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "left" }}>
                  {moment(data.startingDate).format("MMMM Do YYYY")}
                </Text>

                <Text style={{ fontSize: 10, textAlign: "right" }}>
                  {moment(data.endingDate).format("MMMM Do YYYY")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title style={{ fontSize: 10, textAlign: "left" }}>
                  Starting Time
                </Card.Title>

                <Card.Title style={{ fontSize: 10, textAlign: "right" }}>
                  Ending Time
                </Card.Title>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: -12,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "left" }}>
                  {moment(data.startingDate).format("h:mm:ss a")}
                </Text>

                <Text style={{ fontSize: 10, textAlign: "right" }}>
                  {moment(data.endingDate).format("h:mm:ss a")}
                </Text>
              </View>
            </Card>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
    </>
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

export default SingleEvent;
