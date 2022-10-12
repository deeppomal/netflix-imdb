import React,{useState} from 'react'
import {useGetTop250Movies} from '../hooks/useGetTop250Movies'
import { TitleCard } from './TitleCard';

export const TitleListContainer = () => {

  const {data} = useGetTop250Movies();
  const [currentPage,setCurrentPage] = useState(0);

  return (
    <div className='mt-10' >
        <span className='text-[#e5e5e5] text-2xl font-extrabold pl-16' >Top 250</span>
        <div className='mt-6 flex pl-14 pr-14'>
           {
            data?.data?.items.slice(currentPage,currentPage+6).map((item,index)=>{
              return(
                <TitleCard item={item} key={index} />
              )
            })
           }
        </div>
    </div>
  )
}
