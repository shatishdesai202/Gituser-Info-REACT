import React from 'react';
import './UserFollowers.css';
import { GithubContex } from '../Context/Context';
import { Card, CardContent, Typography } from '@material-ui/core';


function UserFollowers() {
    
    const { followers } = React.useContext(GithubContex);

    console.log('@@',followers)

    return (
        <div className="userFollowers mt-5">
          <div className="userFollowers__card">
               
                {/* <Typography>
                    Followers
                </Typography> */}

                
            { followers && followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <>
            <div key={index} className="userFollowers__followers d-flex align-items-center">
              <img className="userFollowers__image" src={img} alt={login} />
              <div className="userFollowers__detail">
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </div>
              <hr/>
            </>
          );
        })}
        </div>
        </div>
    )
}

export default UserFollowers
