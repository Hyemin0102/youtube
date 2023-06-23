import { createContext, useContext } from "react";
//import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import fakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext(); //YoutubeApiContext 함수 전역적으로 사용 가능

const client = new YoutubeClient();
//const client = new fakeYoutubeClient(); //Youtube 클라이언트 인스턴스
const youtube = new Youtube(client); //실제 Youtube API와 통신하는 인스턴스
//youtube에서 불러온 주소 api를 컨텍스트로 만들어 아무곳에서나 쓸 수 있도록 인스턴스 생성

//컨텍스트가 적용될 영역을 지정하는 함수 정의
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {/* 클라스의 인스턴스로 가져온거기때문에 value는 단순 상수가 아니라 중괄호로 한번 더 감싸줘야함
          YoutubeApiContext.Provider의 value로 {youtube} 값을 보내줬기 때문에 위의 인스턴스가 전역적으로 사용 가능하게 됨
      */}
      {children}
    </YoutubeApiContext.Provider>
  );
}

//value에 접근할수있게 만드는 함수
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
