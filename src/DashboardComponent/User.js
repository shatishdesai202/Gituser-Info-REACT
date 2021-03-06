import React from 'react';
import UserInfo from './UserInfo';
import UserFollowers from './UserFollowers';
import './User.css';

function User() {
    return (
        <div className="user">
            <UserInfo/>
            <UserFollowers/>            
        </div>
    )
}

export default User
