import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'




const Friend = (props) => {
    const {name,username,id} =props.friend
    const navigate = useNavigate()
    const showFriendDetail=()=>{
        const path=`/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <Link className='underline' to={`/friend/${id}`}>Show Detail</Link>
            <button onClick={showFriendDetail} className="button bg-gray-300 border-2 px-2 py-2 rounded-lg">{username}:{id}</button>
        </div>
    );
};

export default Friend;