import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function VideoCard({video,type}) {
  const {thumbnails,title,channelTitle,publishedAt} = video.snippet;

  const navigate = useNavigate();
  const isRelated = type === "related";
  return  (
    <li className={isRelated?'flex gap-x-4 mb-4 cursor-pointer': 'cursor-pointer'} onClick={()=>{ navigate(`/videos/watch/${video.id}`,{state:{video}} )}}> 
      {/* navigate 인자값으로 첫번째는 링크, 두번째는 보내는값 */}
      <img className={isRelated? 'w-40 rounded-lg' : 'w-full rounded-lg'} src={thumbnails.high.url} alt={title}></img>
      <div>
        <p className={isRelated? 'text-base mt-0  mb-1 leading-4 line-clamp-2' : 'text-lg mt-3 mb-1 leading-6 line-clamp-2'}>{title}</p>
        <p className={isRelated? 'text-xs opacity-80' : 'text-sm opacity-80'}>{channelTitle}</p>
        <p className={isRelated? 'text-xs  opacity-50' : 'text-sm opacity-50'}>{formatAgo(publishedAt,'ko')}</p>              
      </div>
    </li>
  )
}
