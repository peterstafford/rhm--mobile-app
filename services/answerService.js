import axios from "axios";
// import { toast } from "react-toastify";
import Configuration from "../config/configuration";

class AnswerServices {
  constructor() {
    this.config = new Configuration();
  }

  showAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );

  addAnswers = (
    QuestionOne,
    QuestionTwo,
    QuestionThree,
    QuestionFour,
    AnswerOne,
    AnswerTwo,
    AnswerThree,
    AnswerFour,
    LastName,
    Phone,
    PersonComp,
    Purpose,
    userName
  ) =>
    new Promise((resolve, reject) => {
      axios
        .post(this.config.apiBaseUrl + "answers/mobile-answers", {
          QuestionOne,
          QuestionTwo,
          QuestionThree,
          QuestionFour,
          AnswerOne,
          AnswerTwo,
          AnswerThree,
          AnswerFour,
          LastName,
          Phone,
          PersonComp,
          Purpose,
          userName,
        })
        .then((res) => {
          // localStorage.setItem("token", token.data);
          resolve(res);
        })
        .catch((err) => {
          //   toast.error(err.response.data, {
          //     position: toast.POSITION.TOP_RIGHT,
          //   });
          reject(err);
        });
    });

  getAnswers = (month) => {
    return axios.get(this.config.apiBaseUrl + `answers/?startMonth=${month}`);
  };

  deleteAnswers() {
    return axios.delete(this.config.apiBaseUrl + "answers/monthly");
  }

  handleMessage(type) {
    if (type === "add") toast("Success!");
    else if (type === "delete") toast("Successfully deleted Answers");
    else if (type === "noData") toast("No Records Found");
  }
  handleCustomMessage(message) {
    toast(message.toString());
  }
  handleError() {
    toast("Something went wrong!");
  }
}

let answerServices = new AnswerServices();

export default answerServices;
