import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GithubProvider } from './Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';

console.log(process.env.REACT_APP_DOMAIN_NAME)

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
        domain="dev-qlb9z8-4.us.auth0.com"
        clientId="bxE9HTs3BfiuJV5udMB6FGVTALcXGeX5"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
        >
            <GithubProvider>
                <App/>
            </GithubProvider>
        </Auth0Provider>
    </React.StrictMode> , document.getElementById("root"));

