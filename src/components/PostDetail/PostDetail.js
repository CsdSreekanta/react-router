import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const PostDetail = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})
    console.log(post)

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res =>res.json())
        .then(data =>setPost(data))
    },[postId])
    return (
        <div>
            <h2> This is the post details:{postId}</h2>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
        </div>
    );
};

export default PostDetail;