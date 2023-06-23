import React, { useState, useEffect } from 'react'
import { BsYoutube, BsSearch, BsPersonCircle, BsThreeDotsVertical } from "react-icons/bs";
import { Link,useNavigate,useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text,setText] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/videos/${text}`);    
  }

  //서치가 있을때만 인풋 텍스트가 보이게
  useEffect(()=>{
    setText(keyword || '')
  },[keyword])

  return (
    <div className="border-b border-zinc-500"> 
      <div className='w-full max-w-screen-2xl m-auto'>
        <header className='flex justify-between p-4'>
          <Link to='/' className='flex items-center'>
            <BsYoutube className='text-4xl text-brand'/>
            <h1 className='text-3xl font-LeagueGothic ml-3 tracking-wide'>Youtube</h1>
            <sup className='text-xs text-zinc-400 ml-2'>KR</sup>
          </Link>

          <form onSubmit={handleSubmit} className='flex justify-between border border-zinc-600 rounded-full pl-6 w-1/2 max-w-2xl '>
            <input 
              type="text" 
              placeholder='검색' 
              value={text}
              onChange={(e)=> setText(e.target.value)} 
              className='bg-zinc-900 text-zinc-400 outline-0 w-full' />
            <button className='border-l border-zinc-600 px-6 bg-zinc-700 rounded-r-full '  >
              <BsSearch />
            </button>
          </form>

          <div className='hidden sm:flex items-center'>
            <BsThreeDotsVertical className='text-lg' />
            <button className=' flex items-center border border-zinc-600 rounded-full p-2 text-sky-500 ml-4 hover:bg-sky-950'>
              <BsPersonCircle />
              <span className='text-sm pl-2'>로그인</span>
            </button>
            
          </div>
          

        </header>
      </div>
    </div>
  )
}
