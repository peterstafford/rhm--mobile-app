import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import colors from "../config/colors";
import moment from "moment";
import EventService from "../../services/eventService";

export default function Events(props) {
  const [data, setDataa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigation = useNavigation();

  useEffect(() => {
    getEventsFunction();
  }, [selectedIndex]);

  const getEventsFunction = () => {
    if (selectedIndex === 0) {
      EventService.getEvents()
        .then((res) => {
          let dataa = [];
          res.data.map((item, index) => {
            dataa.push({
              _id : item._id,
              title: item.title,
              description: item.description,
              image: item.image,
              startingDate: item.startingDate,
              endingDate: item.endingDate,
            });
            // let contentState = JSON.parse(item.QuestionOne);
          });
          setDataa(dataa);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (selectedIndex === 1) {
      EventService.getPastWeekEvents()
        .then((res) => {
          let dataa = [];
          res.data.map((item, index) => {
            dataa.push({
              _id : item._id,
              title: item.title,
              description: item.description,
              image: item.image,
              startingDate: item.startingDate,
              endingDate: item.endingDate,
            });
            // let contentState = JSON.parse(item.QuestionOne);
          });
          console.log(dataa);
          setDataa(dataa);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (selectedIndex === 2) {
      EventService.getWeeklyEvents()
        .then((res) => {
          let dataa = [];
          res.data.map((item, index) => {
            dataa.push({
              _id : item._id,
              title: item.title,
              description: item.description,
              image: item.image,
              startingDate: item.startingDate,
              endingDate: item.endingDate,
            });
            // let contentState = JSON.parse(item.QuestionOne);
          });
          console.log(dataa);
          setDataa(dataa);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      EventService.getMonthlyEvents()
        .then((res) => {
          let dataa = [];
          res.data.map((item, index) => {
            dataa.push({
              _id : item._id,
              title: item.title,
              description: item.description,
              image: item.image,
              startingDate: item.startingDate,
              endingDate: item.endingDate,
            });
            // let contentState = JSON.parse(item.QuestionOne);
          });
          console.log(dataa);
          setDataa(dataa);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const Filters = ({ data, onValueChange }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {data.map((x, i) => (
          <FilterButton
            text={x.title}
            id={i}
            selectedIndex={selectedIndex}
            callback={(id) => {
              setSelectedIndex(id);
              if (onValueChange) {
                onValueChange(id);
              }
            }}
          />
        ))}
      </View>
    );
  };

  const FilterButton = ({ callback, text, id, selectedIndex }) => {
    const clicked = selectedIndex === id;
    return (
      <TouchableOpacity
        style={[
          {
            borderRadius: 15,
            borderColor: "black",
            borderWidth: 2,
            padding: 10,
            margin: 5,
          },
          { backgroundColor: clicked ? "black" : "#ecf0f1" },
        ]}
        onPress={() => {
          callback(id);
        }}
      >
        <Text style={{ color: clicked ? "white" : "black" }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#ecf0f1",
      padding: 8,
    },
    filterButton: {
      borderRadius: 15,
      padding: 8,
      paddingLeft: 24,
      paddingRight: 24,
      marginRight: 8,
    },
  });

  return (
    <>
      <Filters
        data={[
          { title: "All", key: "1" },
          { title: "Past", key: "2" },
          { title: "Next 7 Days", key: "3" },
          { title: "Next 30 Days", key: "4" },
        ]}
        onValueChange={(id) => {
          console.log(id);
        }}
      />

      <ScrollView>
        {loading ? (
          data.map((item) => (
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('SingleScreen',{
              screen: 'SingleScreen',
              params: { id: item._id },
            })
            }
            >
              <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <Card.Image
                  style={{ padding: 0, marginBottom: 10 }}
                  source={{
                    uri: `${item.image}`,
                  }}
                />
               
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
                    {moment(item.startingDate).format("MMMM Do YYYY")}
                  </Text>

                  <Text style={{ fontSize: 10, textAlign: "right" }}>
                    {moment(item.endingDate).format("MMMM Do YYYY")}
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
                    {moment(item.startingDate).format("h:mm:ss a")}
                  </Text>

                  <Text style={{ fontSize: 10, textAlign: "right" }}>
                    {moment(item.endingDate).format("h:mm:ss a")}
                  </Text>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
}
