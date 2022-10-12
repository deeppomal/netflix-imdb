import React from 'react'

export const TitleCard = ({item}) => {
  return (
    <div className="flex-1 m-2 rounded-md cursor-pointer drop-shadow-2xl">
        <img className='h-3/4 w-full object-cover rounded-md' src={item.image} alt={item?.title + ' poster'} />
    </div>
  )
}
