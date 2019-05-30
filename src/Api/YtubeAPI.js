import Axios from "axios";

const KEY = "AIzaSyAwVLVD6EY9ElZtiqePVU_00qN1t2g4CTY";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },

  headers: {
    Autherization: ""
  }
});
