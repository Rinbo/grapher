import axios from "axios";

let backendHost;
const hostname = window && window.location && window.location.hostname;

if (hostname === "grapher.borjessons.nu") {
  backendHost = "https://api.borjessons.nu/g-end";
} else {
  backendHost = "http://localhost:8080/g-end";
}

export default axios.create({
  baseURL: backendHost,
});
