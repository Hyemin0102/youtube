import React from 'react';
import { useLocation } from "react-router-dom";
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {state:{video}} = useLocation();
  //useLocation 현재 라우터의 위치 정보 가져옴. url의 경로, 매개변수 등의 정보 알수있는데 여기선 현재 경로 정보 중 state:{video} 만 가져옴
  //console.log(video)

  const {title,description,channelId,channelTitle} = video.snippet;//video.snippet.title 이런식으로 일일이 써야하기때문에 미리 구조분해
  const wrap = {
    position:'relative',
    paddingBottom:'56.25%',
    paddingTop:0,
    height:0,
    overflow:'hidden'
  }
  const iframe = {
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%'
  } //화면 줄어들면서 세로도 줄어들게 paddingBottom 사용

  return (
    <section className='flex flex-col lg:flex-row p-4 gap-x-4'>
      <article className='basis-2/3 mb-6'>
        <div style={wrap}>
          <iframe id="player" type="text/html" width="100%" height="640" style={iframe}
        src={`https://www.youtube.com/embed//${video.id}`} title={title}/> {/* iframe에 title 속성 꼭 넣어줘야 오류 안뜸 */}
        </div>
        <div>
          <h2 className='text-xl font-bold pt-4'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle}/>{/* ChannelInfo에 넘겨줌 */}
          {/* <h2>채널 아이콘, 채널 이름</h2> */}
          <div className='h-48 bg-stone-700 overflow-y-auto p-2 rounded-2xl'> 
          <pre className='whitespace-pre-wrap'>{description}</pre> {/* pre - 시스템에 미리 지정된 고정폭 글꼴 사용하며, 여백, 줄바꿈 모두 그대로 화면에 출력됨 */}
          </div>
        </div>
      </article>
      <aside className='basis-1/3'>
        <RelatedVideos id={video}/>
      </aside>
    </section>
  )
}
