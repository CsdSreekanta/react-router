import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    
    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setFriends(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-600'>Hello friends How are you?</h1>
            <p><small className='text-xl'>Parle kiso taka dar dao: {friends.length}</small></p>
            {
                friends.map(friend=><Friend 
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
            }
        </div>
    );
};

export default Friends;