import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query'

const ChannelInfo = ({id,name}) => {
  const {youtube} = useYoutubeApi(); //context value값이랑 이름 맞춤
  
  const { data:url} = useQuery( ['channel',id], ()=> youtube.channelImgUrl(id),{staleTime:1000*60*10})//10분간 캐시된걸씀
  //const { data:가져오는 값의 이름} = useQuery( ['가져오는값 앞에 붙을 이름',id](상태 저장/캐쉬값), ()=> 불러오는 함수, 시간)
  //channelImgUrl(id) 에서 값 받아온게 data:url

  return (
    <div className='flex my-4 items-center'>
      {url && <img src={url} alt={name} className="w-10 h-10 rounded-full"/>}
      <p className='text-lg ml-4'>{name}</p>
    </div>
  )
}

export default ChannelInfo