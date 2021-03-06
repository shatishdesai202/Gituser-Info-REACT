import React, { useState } from 'react';
import './Search.css';
import { GithubContex } from '../Context/Context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Search() {

    const [user, setUser]  = useState('');

    const {requests, error, searchGithubUser, isloading} = React.useContext(GithubContex);
    console.log('->',requests);
    console.log('<-',error);
    console.log('<->',isloading);

    const handleSubmit = (e) =>{
        
        if(user){
            console.log('xxx->');
            searchGithubUser(user);
            setUser('');
        }
    }

    return (
        <div className="seach d-flex justify-content-between">

            <div className="seach__container">
            <TextField className="search__textfield"  value={user} onChange={ (e) => {setUser(e.target.value)} } id="outlined-basic" label="Search Git User Here" variant="outlined" />
            { !isloading &&  requests > 0 &&  <Button variant="contained" color="primary" onClick={ ()=>  {handleSubmit()}} className="search__button">
                    Search
                </Button>    
            }
            {   error.show && <p className="seach__error text-center font-size-lg"> {error.msg} </p>  }
            </div>

            <h3 className="search__request">Request : <u className="search__request__value"> {requests} </u>  </h3>  
        </div>
    )
}

export default Search
