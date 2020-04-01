import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID C2tkJ1Z53yvrv5Z0vduRGyt-5t9jBWpM0boTqa9ZaDk"
  }
});
