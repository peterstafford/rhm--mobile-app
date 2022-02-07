import React, { useState, useEffect } from "react";

import currentQuestionServices from "../../services/currentQuestionsService";
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
import colors from "../config/colors";
import RadioForm from "react-native-simple-radio-button";
import { Formik } from "formik";
import shortValidation from "../vaidations/shortvalidations";
import answerServices from "../../services/answerService";
import MaskInput from "react-native-mask-input";

function Questionaire({ navigation }, props) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const [data, setDataa] = useState([]);
  const [CS, SCS] = useState();

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = () => {
    currentQuestionServices
      .getCurrentQuestions()
      .then((res) => {
        let dataa = [];
        res.data.map((item, index) => {
          dataa.push({
            id: item._id,
            QuestionOne: item.QuestionOne
              ? JSON.parse(item.QuestionOne)
              : "none",
            QuestionTwo: item.QuestionTwo
              ? JSON.parse(item.QuestionTwo)
              : "none",
            QuestionThree: item.QuestionThree
              ? JSON.parse(item.QuestionThree)
              : "none",
            QuestionFour: item.QuestionFour
              ? JSON.parse(item.QuestionFour)
              : "none",
            userName: item.userName ? item.userName : "none",
          });
          // let contentState = JSON.parse(item.QuestionOne);
        });
        setDataa(dataa);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let contentState =
    data && data[0] && data[0].QuestionOne
      ? data[0].QuestionOne
      : '{"blocks":[{"key":"11hgg","text":"Have you had any contact with anyone known to be COVID - 19 positive in the last 14 days","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":88,"style":"color-rgb(33,37,41)"},{"offset":0,"length":88,"style":"fontsize-16"},{"offset":0,"length":88,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":88,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}},{"key":"ch0g","text":"Your response to the above questions? ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":37,"style":"color-rgb(33,37,41)"},{"offset":0,"length":37,"style":"fontsize-16"},{"offset":0,"length":37,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":37,"style":"BOLD"},{"offset":0,"length":38,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}}],"entityMap":{}}';
  let contentState2 =
    data && data[0] && data[0].QuestionTwo
      ? data[0].QuestionTwo
      : '{"blocks":[{"key":"11hgg","text":"Have you had any contact with anyone known to be COVID - 19 positive in the last 14 days","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":88,"style":"color-rgb(33,37,41)"},{"offset":0,"length":88,"style":"fontsize-16"},{"offset":0,"length":88,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":88,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}},{"key":"ch0g","text":"Your response to the above questions? ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":37,"style":"color-rgb(33,37,41)"},{"offset":0,"length":37,"style":"fontsize-16"},{"offset":0,"length":37,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":37,"style":"BOLD"},{"offset":0,"length":38,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}}],"entityMap":{}}';
  let contentState3 =
    data && data[0] && data[0].QuestionThree
      ? data[0].QuestionThree
      : '{"blocks":[{"key":"11hgg","text":"Have you had any contact with anyone known to be COVID - 19 positive in the last 14 days","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":88,"style":"color-rgb(33,37,41)"},{"offset":0,"length":88,"style":"fontsize-16"},{"offset":0,"length":88,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":88,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}},{"key":"ch0g","text":"Your response to the above questions? ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":37,"style":"color-rgb(33,37,41)"},{"offset":0,"length":37,"style":"fontsize-16"},{"offset":0,"length":37,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":37,"style":"BOLD"},{"offset":0,"length":38,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}}],"entityMap":{}}';
  let contentState4 =
    data && data[0] && data[0].QuestionFour
      ? data[0].QuestionFour
      : '{"blocks":[{"key":"11hgg","text":"Have you had any contact with anyone known to be COVID - 19 positive in the last 14 days","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":88,"style":"color-rgb(33,37,41)"},{"offset":0,"length":88,"style":"fontsize-16"},{"offset":0,"length":88,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":88,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}},{"key":"ch0g","text":"Your response to the above questions? ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":37,"style":"color-rgb(33,37,41)"},{"offset":0,"length":37,"style":"fontsize-16"},{"offset":0,"length":37,"style":"fontfamily--apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif"},{"offset":0,"length":37,"style":"BOLD"},{"offset":0,"length":38,"style":"bgcolor-rgb(255,255,255)"}],"entityRanges":[],"data":{"text-align":"start"}}],"entityMap":{}}';

  const blocks = getRNDraftJSBlocks({ contentState });
  const blocks2 = getRNDraftJSBlocks({ contentState: contentState2 });
  const blocks3 = getRNDraftJSBlocks({ contentState: contentState3 });
  const blocks4 = getRNDraftJSBlocks({ contentState: contentState4 });

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
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titleText}>Questionaire</Text>
        </View>
        <Formik
          initialValues={{
            QuestionOne: "No",
            QuestionTwo: "No",
            QuestionThree: "No",
            QuestionFour: "No",
            LastName: "",
            Email: "",
            PersonComp: "",
            Purpose: "",
            Phone: "",
          }}
          validationSchema={shortValidation.newAnswerValidation}
          onSubmit={(values, actions) => {
            console.log("Valuessss", values);

            answerServices
              .addAnswers(
                JSON.stringify(data[0].QuestionOne),
                JSON.stringify(data[0].QuestionTwo),
                JSON.stringify(data[0].QuestionThree),
                JSON.stringify(data[0].QuestionFour),
                values.QuestionOne,
                values.QuestionTwo,
                values.QuestionThree,
                values.QuestionFour,
                values.LastName,
                values.Phone,
                values.PersonComp,
                values.Purpose,
                values.Email
              )
              .then(() => {
                navigation.navigate("QuestionaireCompleted");
              })
              .catch((err) => {
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
              <View style={styles.label}>{blocks}</View>

              <RadioForm
                style={styles.radio}
                labelS
                radio_props={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
                formHorizontal={true}
                initial={1}
                onPress={(value) => {
                  setFieldValue("QuestionOne", value);
                  console.log(value);
                }}
              />
              {errors.QuestionOne && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  {errors.QuestionOne}
                </Text>
              )}

              <View style={styles.label}>{blocks2}</View>

              <RadioForm
                style={styles.radio}
                radio_props={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
                formHorizontal={true}
                initial={1}
                onPress={(value) => {
                  setFieldValue("QuestionTwo", value);
                  console.log(value);
                }}
              />
              {errors.QuestionTwo && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.QuestionTwo}
                </Text>
              )}

              <View style={styles.label}>{blocks3}</View>

              <RadioForm
                style={styles.radio}
                radio_props={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
                formHorizontal={true}
                initial={1}
                onPress={(value) => {
                  setFieldValue("QuestionThree", value);
                  console.log(value);
                }}
              />
              {errors.QuestionThree && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.QuestionThree}
                </Text>
              )}

              <View style={styles.label}>{blocks4}</View>

              <RadioForm
                style={styles.radio}
                radio_props={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
                formHorizontal={true}
                initial={1}
                onPress={(value) => {
                  setFieldValue("QuestionFour", value);
                  console.log(value);
                }}
              />
              {errors.QuestionFour && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.QuestionFour}
                </Text>
              )}

              <Text style={styles.label}>Name</Text>

              <TextInput
                placeholder="Last Name, First Name"
                style={styles.input}
                onBlur={() => handleBlur("LastName")}
                onChangeText={(value) => {
                  setFieldValue("LastName", value);
                }}
              />
              {errors.LastName && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.LastName}
                </Text>
              )}
              <Text style={styles.label}>Email</Text>

              <TextInput
                placeholder="Email"
                style={styles.input}
                onBlur={() => handleBlur("Email")}
                onChangeText={(value) => {
                  setFieldValue("Email", value);
                }}
              />
              {errors.Email && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.Email}
                </Text>
              )}

              <Text style={styles.label}>Phone</Text>

              <TextInput
                placeholder="Phone No."
                style={styles.input}
                onBlur={() => handleBlur("Phone")}
                onChangeText={(value) => {
                  setFieldValue("Phone", value);
                }}
              />
              {errors.Phone && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.Phone}
                </Text>
              )}

              <Text style={styles.label}>
                Name of person completing screening
              </Text>

              <TextInput
                placeholder="Person Completing Form"
                style={styles.input}
                onBlur={() => handleBlur("PersonComp")}
                onChangeText={(value) => {
                  setFieldValue("PersonComp", value);
                }}
              />
              {errors.PersonComp && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.PersonComp}
                </Text>
              )}

              <Text style={styles.label}>Purpose for visit</Text>

              <TextInput
                style={styles.input}
                placeholder="Purpose Of Visit"
                onBlur={() => handleBlur("Purpose")}
                onChangeText={(value) => {
                  setFieldValue("Purpose", value);
                }}
              />
              {errors.Purpose && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {errors.Purpose}
                </Text>
              )}

              <TouchableOpacity onPress={() => handleSubmit()}>
                <View style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Submit
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
  label: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  radio: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 20,
    width: 135,
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
    backgroundColor: "#1172ae",
    borderRadius: 4,
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Questionaire;
