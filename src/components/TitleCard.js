import React from 'react'

export const TitleCard = ({item,index}) => {
  return (
    <div className={`flex-1 m-4 rounded-md cursor-pointer shadow-lg shadow-cyan-500/50 h-80`}>
        <img className='h-full w-full object-cover rounded-md' src={item.image} alt={item?.title + ' poster'} />
    </div>
  )
}
