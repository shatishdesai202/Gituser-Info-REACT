import React from 'react';
import { GithubContex } from '../Context/Context';
import { Card, CardContent } from '@material-ui/core';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import './UserInfo.css';

function UserInfo() {
    const { githubUser } =  React.useContext(GithubContex);
    
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        bio,
        location,
        twitter_username,
      } = githubUser;

    return (

        <div className="userInfo mt-5">
            <Card boxShadow={3}>
                <CardContent>
                        <div className="userInfo__info">
                                <img src={avatar_url} alt={name} />
                                <div className="info--detail">
                                    <h4>{name}</h4>
                                    <p>@{twitter_username || 'Not Provided'}</p>
                                </div>

                            <a className="userInfo__link" href={html_url}><u className=" btn btn-info userInfo__underline">follow</u></a>
                        </div>
                    <p className='bio'>{bio}</p>
                    <div className='links'>
                        <p>
                        <MdBusiness></MdBusiness> {company || 'Not Provided' }
                        </p>
                        <p>
                        <MdLocationOn></MdLocationOn> {location || 'earth'}
                        </p>
                        <a href={`https://${blog}`}>
                        <MdLink></MdLink>
                        {blog || 'Not Provided'}
                        </a>
                    </div>    
                </CardContent>
            </Card>
        </div>
    
    )
}

export default UserInfo
