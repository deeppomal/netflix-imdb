import React from 'react'
import {TitleListContainer}  from './TitleListContainer';
const Home = () => {

  return (
    <div>
      <TitleListContainer title={'Top IMDB Movies'} query={'Top250Movies'} queryName={'top-250-m'} />
    </div>
  )
}

export default Home