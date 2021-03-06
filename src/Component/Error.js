import React from 'react';
import './Error.css';

import { AiFillGithub } from "react-icons/ai";

import { Link} from 'react-router-dom';

function Error() {
    return (
        <div className="error">            
 
            <h1> <AiFillGithub/> 404  </h1>
            
            <p> Sorry, Page Not Found </p>
 
            <Link to="/">
                <button className="btn bg-primary"> <AiFillGithub/>   Back </button>
            </Link>
 
        </div>
    )
}

export default Error


