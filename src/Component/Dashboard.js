import React from 'react'
import {GithubContex} from '../Context/Context';
import Info from '../DashboardComponent/Info';
import User from '../DashboardComponent/User';
import Charts from '../DashboardComponent/Charts'
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import './Dashboard.css';
import Search from '../DashboardComponent/Search';
import PreLoader from '../Assets/preloader.gif'
import Navbar from '../DashboardComponent/Navbar'

function Dashboard() {

    const { githubUser , isloading} =  React.useContext(GithubContex);

    const { public_repos, followers, following, public_gists } = githubUser;

      
    console.log('isloading',isloading);

    console.log('githubUser',githubUser);    

    if(isloading){
        return(

            <main className="dashboard__main">
                <Search/>
                <div className="dashboard__loaderContainer" >
                    <img  className="dashboard__loader" src={PreLoader} />
                </div>
            </main>   
        )
    }
    
    

    return (
        <div className="dashboard">
            
            <div className="dashboard__navbar">
                <Navbar/>
            </div>
            
            <hr/>

            <div>
                <Search/>
            </div>

            <div className="dashboard__info">
                <Info className="bg-primary" value={public_repos} icon={<GoRepo className="icons"/>} label={'Repo'}  />
                <Info className="bg-secondary" value={followers} icon={<FiUsers className="icons"/>} label={'Followers'}  />
                <Info className="bg-info" value={following} icon={<FiUserPlus className="icons"/>} label={'Following'}  />
                <Info className="bg-danger" value={public_gists} icon={<GoGist className="icons"/>} label={'gists'}  />
            </div>
            
            <div className="dashboard__user">
                <User/>
            </div>

            <div className="dashboard__chart">
                <Charts/>
            </div>
            
        </div>
    )
}

export default Dashboard


