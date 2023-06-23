//youtube 연결하는 부분만

import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3", //url에서 공통되는 부분
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }, //.env로 API_KEY 가져올때 공식
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }
  //youtube에서 지정한 함수에서 params 가져옴
}
