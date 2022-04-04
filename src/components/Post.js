import React from 'react'
import { UserCircleIcon, ThumbUpIcon, ShareIcon } from '@heroicons/react/solid'

const Post = ({ message, name, image, timestamp }) => {
  return (
    <div className='p-5 bg-white mt-5 rounded-2xl shadow-xl'>
        <div className='flex flex-col space-y-3'>
            <div className='flex items-center space-x-2'>
                <UserCircleIcon className='h-12 w-1h-12 text-blue-500' />
                <div className='text-left'>
                    <p className='font-semibold text-lg capitalize'>{name}</p>
                    <p className='font-semibold text-xs text-slate-500'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <div className='space-y-2'>
                <p className='text-left font-medium'>{message}</p>
                {image ? <img className='w-full h-96 rounded-md' src={image} alt="" /> : null}
                
            </div>
            <div className='flex justify-between'>
                <ThumbUpIcon className='h-5 w-5 text-blue-500 cursor-pointer hover:scale-110' />
                <ShareIcon className='h-5 w-5 text-blue-500 cursor-pointer hover:scale-110' />
            </div>
        </div>
    </div>
  )
}

export default Post;