import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Loader from '../Assets/preloader.gif';

function AuthWrapper({children}) {

    const {isLoading, error} = useAuth0();

    if(isLoading){
        return(<div className="dashboard__loaderContainer">
            <img className="dashboard__loader" src={Loader} alt={'loder'}/>
        </div>)
    }
    
    if(error){
        return(
            <div>
                {error.message}
            </div>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default AuthWrapper
