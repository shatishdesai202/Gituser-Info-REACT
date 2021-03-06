import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';


function Navbar() {

    const {isAuthenticated, loginWithRedirect, logout, isLoading, user} = useAuth0();

    const isUser = isAuthenticated && user;


    return (
        <div className="d-flex my-3 justify-content-between">
            {isUser && user.picture && <img src={user.picture} alt={user.name} />}
            {isUser && user.name && <h4> Welcome <strong className="bg-warning"> {user.name.toUpperCase()} </strong> </h4>}
            { isUser ? <Button variant="contained"   color="primary" onClick={ ()=>  logout({returnTo:window.location.origin}) } className="search__button">
                    Log Out
            </Button> :  <Button variant="contained" color="primary" onClick={ ()=>  loginWithRedirect() } className="search__button">
                    Login
            </Button>  }
           
            
        </div>
    )
}

export default Navbar
