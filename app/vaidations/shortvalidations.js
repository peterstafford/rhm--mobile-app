import { yupToFormErrors } from "formik";
import * as Yup from "yup";
// import "yup-phone";

class ShortValidation {
  newQuestionValidation = () => {
    return Yup.object({});
  };

  newAnswerValidation = () => {
    return Yup.object({
      // AnswerOne: Yup.string().required("Required!"),
      // AnswerTwo: Yup.string().required("Required!"),
      // AnswerThree: Yup.string().required("Required!"),
      // AnswerFour: Yup.string().required("Required!"),
      // Name: Yup.string().required("Required"),
      Email: Yup.string()
        .email("Enter A Valid Email Address")
        .required("Required!"),
      LastName: Yup.string().required("Required!"),
      Phone: Yup.string().required("Required"),
      PersonComp: Yup.string().required("Required"),
      Purpose: Yup.string().required("Required"),
    });
  };

  newConsentFormValidation = () => {
    return Yup.object({
      firstName: Yup.string().required("Required!"),
      lastName: Yup.string().required("Required!"),
      email: Yup.string()
        .email("Enter A Valid Email Address")
        .required("Required!"),
    });
  };

  handleError(error) {
    console.log(error.message);
  }
}
const shortValidation = new ShortValidation();
export default shortValidation;
