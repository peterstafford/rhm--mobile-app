import axios from "axios";
// import { toast } from "react-toastify";
import Configuration from "../config/configuration";

// axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
// axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

class UserServices {
  constructor() {
    this.config = new Configuration();
  }

  addUser(formData) {
    return axios.post(this.config.apiBaseUrl + "user", formData);
  }

  getUsers = () => {
    return axios.get(this.config.apiBaseUrl + "user");
  };

  getUserById(id) {
    return axios.get(this.config.apiBaseUrl + "user/" + id);
  }

  deleteUsers(id) {
    return axios.delete(this.config.apiBaseUrl + "user/" + id);
  }

  updateAllUserFields = (id) =>
    axios.put(this.config.apiBaseUrl + `user/${id}`);

  handleMessage(type) {
    if (type === "add") toast("Successfully Registered!");
    else if (type === "update") toast("Successfully updated User");
    else if (type === "delete") toast("Successfully deleted User");
  }
  handleCustomMessage(message) {
    toast(message.toString());
  }
  handleError() {
    toast("Something went wrong!");
  }
}

let userServices = new UserServices();

export default userServices;
