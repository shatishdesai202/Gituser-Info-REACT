import React, { useState, useEffect } from 'react';
import axios from 'axios';

import mokeUser from './mokeData/mokeUser';
import mokeRepo from './mokeData/mokeRepo';
import mokeFollowers from './mokeData/mokeFollowers';

const rootUrl = "https://api.github.com";

const GithubContex = React.createContext();

// Provider, Consumer ---> GithubContext

const GithubProvider = ({children}) =>{

    const [githubUser, setGithubUser] = useState(mokeUser);
    const [repos, setRepos] = useState(mokeRepo);
    const [followers, setFollowers] = useState(mokeFollowers);

    // request Loading
    const [requests, setRequests] = useState(0);
    const [isloading, setIsLoading] = useState(false);

    //errors
    const [error, setError] = useState( { show:false, msg:' '});

    const searchGithubUser = async(user) =>{
        toggleError();
        setIsLoading(true);
        
        console.log('user',user);

        const response = await axios(`${rootUrl}/users/${user}`)
                            .catch( (err) => { console.log(err) } )
             console.log(response)

             if(response){
                 
                setGithubUser(response.data)
                const { login, followers_url } = response.data;

                //repos
                // --> First Way
            //   await  axios(`${rootUrl}/users/${login}/repos?per_page=100`)
            //         .then( (response) => setRepos(response.data) )

            //     //followers
            //    await axios(`${followers_url}?per_page=100`)
            //         .then( (response) => setFollowers(response.data) )

                    // --> Second Way
                    await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`),axios(`${followers_url}?per_page=100`)])
                        .then( (results) => {
                            const [repos, followers] = results;
                            const status = 'fulfilled';
                            if(repos.status === status){
                                setRepos(repos.value.data);
                            }
                            if(followers.status === status){
                                setFollowers(followers.value.data);
                            }
                        })

             }else{
                 console.log('ccc');
                 toggleError(true, 'Sorry, User Not Exist');
             }

             checkRequests();
             setIsLoading(false);
    }

    //check rate
    const checkRequests = () =>{
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            console.log('x',data)
             
            let {rate:{remaining}} = data ;
             
             console.log('remaining',remaining);

             setRequests(remaining);
            // remaining=0
             if(remaining === 0){
                 toggleError(true, 'Sorry, you have exeeded your hourly rate limit');
                // setError({ show:true, msg:'Sorry, you have exeeded your hourly rate limit'});
                console.log('error', error);
                 // throw a error
             }
            })
        .catch( (err) =>{ console.log(err); })
    }


    function toggleError(show=false, msg=' '){
        console.log('toggleError',error);
        setError({show, msg});
        console.log('toggleError@2',error);
    }

    //error
    useEffect(checkRequests, []);


    return(
        <GithubContex.Provider value={{githubUser, repos, followers, requests, error ,searchGithubUser, isloading}}>
            {children}
         </GithubContex.Provider>
        )
}

export {GithubContex, GithubProvider} 