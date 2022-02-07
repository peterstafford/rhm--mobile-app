import axios from "axios";
// import { toast } from "react-toastify";
import Configuration from "../config/configuration";

class EventService {
  constructor() {
    this.config = new Configuration();
  }


  getEvents= () => {
    return axios.get(this.config.apiBaseUrl + `events`);
  };
  getSingleEvents= (id) => {
    return axios.get(this.config.apiBaseUrl + `events/single-event/${id}`);
  };
  getWeeklyEvents= () => {
    return axios.get(this.config.apiBaseUrl + `events/upcoming-week`);
  };
  getPastWeekEvents= () => {
    return axios.get(this.config.apiBaseUrl + `events/past-week`);
  };
  getMonthlyEvents= () => {
    return axios.get(this.config.apiBaseUrl + `events/upcoming-month`);
  };

  
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

let eventService = new EventService();

export default eventService;
