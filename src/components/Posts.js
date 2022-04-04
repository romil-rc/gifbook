import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Post from './Post';
import { db } from '../firebase';

const Posts = () => {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );
  return (
    <div>
        {realtimePosts?.docs.map((post, i)=>(
            <Post 
                key={i}
                message={post.data().message}
                name={post.data().name}
                email={post.data().email}
                image={post.data().image}
                timestamp={post.data().timestamp}
            />
        ))}
    </div>
  )
}

export default Posts;