import React, { useRef, useState } from 'react'
import { UserIcon, PhotographIcon, SearchCircleIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import gif from '../assets/gif.png'
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

const AddPost = () => {
    const inputRef = useRef(null);

    const [gifVideo, setGifVideo] = useState(null);

    const [show, setShow] = useState(false);

    
    const [inputText, setInputText] = useState('');
    
    const [data, setData] = useState([]);

    const userInput = (e) => {
        let inptxt = e.target.value;
        setInputText(inptxt);
    }

    const fetchGif = () => {
        const apiKey= 'E2UAQ3BrXh3YxxgeXtKu7SNq7YL4grHs';
        const url = `https://api.giphy.com/v1/gifs/search?q=${inputText}&api_key=${apiKey}`;
        fetch(url)
            .then((response)=>{return response.json()})
            .then((data)=>{setData(data.data.map((gif)=>{
                return gif.images.fixed_height.url;
            }))})
    }
    
    const storeGif = (e) => {
        setGifVideo(e.target.src);
        const image = document.createElement("img");
        image.src = e.target.src;
        const gifArea = document.getElementById('gifArea');
        gifArea.appendChild(image);
        setInputText('');
        const elem = document.getElementById('gifBox');
        elem.style.display = 'none';
    }

    const sendPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;
        db.collection('posts').add({
            message: inputRef.current.value,
            name: 'user',
            email: 'user@email.com',
            image: gifVideo,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        inputRef.current.value = '';
        setGifVideo(null);
        setInputText('');
        setData([]);
        const gifArea = document.getElementById('gifArea');
        gifArea.removeChild(gifArea.firstChild);
    };

  return (
    <div className='space-y-5'>
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium'>
            <div className='flex space-x-4 p-4 items-center'>
                <UserIcon className="h-7 w-7 text-blue-500"/>
                <form className='flex flex-1 md:space-x-4'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text" ref={inputRef} placeholder='Type your message...' />
                    <button type='submit' onClick={sendPost}>
                        <ArrowCircleRightIcon className='h-9 w-9 text-blue-500' />
                    </button>
                </form>
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer' onClick={()=>setShow(!show)}>
                    <img src={gif} alt="gif" />
                    <p>Add Giphy</p>
                </div>
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <PhotographIcon className='h-7 w-7 text-orange-600' />
                    <p>Add Image</p>
                </div>
            </div>
            <div id="gifArea"></div>
        </div>
        { 
            show ? 
            
            <div id='gifBox' className='p-5 bg-white rounded-2xl shadow-md text-gray-500 font-medium z-50 space-y-2'>
                <div className='flex space-x-5 items-center'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' onChange={userInput} placeholder="Search for Gifs..." />
                    <SearchCircleIcon className='h-12 text-blue-500 cursor-pointer' onClick={fetchGif} />
                </div>
                {
                    data?.length===0 
                    ? null :
                    <div className='h-72 overflow-y-auto space-y-2'>
                        {
                            data.map((gif, i)=>{
                                return(
                                    <div key={i}>
                                        <img src={gif} onClick={storeGif} className='cursor-pointer' alt="gif" />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div> 
            
            :null }
    </div>
  )
}

export default AddPost;