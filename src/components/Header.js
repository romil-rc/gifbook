import React from 'react'
import { HomeIcon, ChatAlt2Icon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex shadow-md'>
      <div className='flex justify-center flex-grow'>
          <div className='flex space-x-6 md:space-x-8 p-5 md:p-5'>
              <HomeIcon className="h-7 w-7 text-blue-500 hover:scale-110 active:border-b-2 active:border-blue-500 cursor-pointer"/>
              <p className='font-bold text-xl text-blue-500 tracking-widest'>GIFBOOK</p>
              <ChatAlt2Icon className="h-7 w-7 text-blue-500 hover:scale-110 active:border-b-2 active:border-blue-500 cursor-pointer"/>
          </div>
      </div>
    </div>
  )
}

export default Header;