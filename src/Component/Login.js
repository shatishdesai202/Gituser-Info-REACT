import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import { GoLogoGithub, GoOctoface } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";
import './Login.css';


function Login() {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login">
            <div className="login__icons">
                <GoOctoface className="login__gitlogo" />
                <GoLogoGithub className="login__gitlogo"/>
            </div>

            <Button variant="contained" color="primary" onClick={ ()=>  loginWithRedirect() } className="search__button">
                <AiOutlineLogin className="login__loginIcon"/> Login
            </Button>
        </div>
    )
}

export default Login
