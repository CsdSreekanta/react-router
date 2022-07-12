import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const FriendDetail = () => {
   const {friendId}= useParams() 
   const [friend, setFriend] = useState({})
  
   

   useEffect(()=>{
    const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>setFriend(data));
   }, [])

    return (
        <div>
            <h1>This is detail of a bondhu:{friendId}</h1>
            <h2>Name:{friend.name}</h2>
            <h2>Website:{friend.website}</h2>
            <h2>Phone:{friend.phone}</h2>
            <h2>Phone:{friend.company?.bs}</h2>
        </div>
    );
};

export default FriendDetail;