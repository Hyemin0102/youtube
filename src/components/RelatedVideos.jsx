import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

const RelatedVideos = ({id}) => {
  const {youtube} = useYoutubeApi();//context파일에서 만든 함수 가져옴
  const { 
    isLoading, 
    error, 
    data:videos 
  } = useQuery( ['related',id], ()=> youtube.relatedVideos(id),{staleTime:1000*60*10}) //useQuery(캐싱값,불러오는함수,옵션) 형식이고 불러오는 함수에서 data를 받아옴.(fetch 느낌)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>🚨 에러발생 🚨</p>}

      {videos && ( 
        <ul className=''>
          {videos.map((video)=>(
            <VideoCard key={video.id} video={video} type="related"/>
          ))}
        </ul>
      )}
    </>
  )
}

export default RelatedVideos