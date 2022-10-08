import React from 'react'
import {useGetTop250Movies} from '../hooks/useGetTop250Movies'
const Home = () => {

    const {data} = useGetTop250Movies();
  return (
    <div>Home</div>
  )
}

export default Home