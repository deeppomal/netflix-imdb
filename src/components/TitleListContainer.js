import React,{useState} from 'react'
import {useCallCustomAPI} from '../hooks/useCallCustomAPI'
import { TitleCard } from './TitleCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const TitleListContainer = ({title,query,queryName}) => {

  const {data} = useCallCustomAPI(query,queryName);
  const [currentPage,setCurrentPage] = useState(0);
  
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
          <div className='h-96 mt-4 p-3 flex items-center justify-center cursor-pointer hover:bg-[#2c2b2b]' onClick={handleLeftArrow}>
            <ArrowBackIosIcon style={{fontSize: 30,fill:'white',backgroundColor:'transparent'}} />
          </div>
          <div className='flex '>
            {
              data?.data?.items.slice(currentPage,currentPage+6).map((item,index)=>{
                return(
                  <TitleCard item={item} key={index} />
                )
              })
            }
          </div>
          <div className='h-96 mt-4 flex p-3 items-center justify-center cursor-pointer hover:bg-[#2c2b2b]' onClick={handleRighttArrow}>
            <ArrowForwardIosIcon style={{ fontSize: 30,fill:'white', backgroundColor:'transparent'}} />
          </div>
        </div>
        
    </div>
  )
}
