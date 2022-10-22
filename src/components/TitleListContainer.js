import React,{useState} from 'react'
import {useCallCustomAPI} from '../hooks/useCallCustomAPI'
import { TitleCard } from './TitleCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { dataT } from '../dataT';

export const TitleListContainer = ({title,query,queryName}) => {

  const {data} = useCallCustomAPI(query,queryName);
  const [currentPage,setCurrentPage] = useState(0);
  console.log(dataT)
  const handleLeftArrow = () =>{
    setCurrentPage(currentPage>1 && (currentPage => currentPage-6))
  }
  const handleRighttArrow = () =>{
    setCurrentPage(currentPage < 40  && (currentPage => currentPage+6))
  }

  return (
    <div className='mt-10' >
        <span className='text-[#e5e5e5] text-2xl font-extrabold pl-16' >{title}</span>
        <div className='flex mt-6 justify-center'>
          <div className='fixed left-0 p-4 flex hover:opacity-100 hover:bg-black/70 items-center justify-center cursor-pointer h-80 mt-4' onClick={handleLeftArrow}>
            <ArrowBackIosIcon style={{fontSize: 40,fill:'white',backgroundColor:'transparent',}} />
          </div>
          <div className={`flex w-full min-w-screen-2xl overflow-clip pl-16 pr-16`}>
            {
              data?.data?.items.slice(currentPage,currentPage+6).map((item,index)=>{
                return(
                  <TitleCard item={item} key={item.id} index={index} />
                )
              })
            }
          </div>
          <div className='fixed right-0 p-4 flex hover:opacity-100 hover:bg-black/70 items-center justify-center cursor-pointer h-80 mt-4' onClick={handleRighttArrow}>
            <ArrowForwardIosIcon style={{fontSize: 40,fill:'white',backgroundColor:'transparent',}} />
          </div>
        </div>  
    </div>
  )
}
