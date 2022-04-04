import React from 'react'
import AddPost from './AddPost';
import Posts from './Posts';

const Main = () => {

  return (
    <div className='bg-gray-100 p-8 px-10 h-full sm:px-28 md:px-40 lg:px-64 xl:px-96'>
      <AddPost />
      <Posts />
    </div>
  )
}

export default Main;