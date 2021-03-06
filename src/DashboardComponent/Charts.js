import React from 'react';
// import Example from '../Chart/Example';
import Pie3d from '../Chart/Pie3d';
import Doughnut from '../Chart/Doughnut';
import Spline from '../Chart/Spline';
import Forks from '../Chart/Forks';
import './Chart.css'
import { GithubContex } from '../Context/Context';


function Charts() {

  const { repos } = React.useContext(GithubContex);
  
  

  let languages = repos.reduce( (total, item) =>{
    // console.log(item)
    const { language, stargazers_count } = item;
    
    if(!language) return total;
    
    if(!total[language]){
      total[language] = {label:language, value : 1, stars:stargazers_count};
    }else{
      total[language] = {...total[language], value : total[language].value + 1, stars: total[language].stars + stargazers_count }
    }

    return total;

  },{});

  // console.log('x',languages)

  const mostUsed = Object.values(languages)
                .sort( (a,b) => {
                  return b.value - a.value
                }).slice(0,5) 

  
  const mostPopular = Object.values(languages)
                  .sort( (a,b) => {
                    return b.stars - a.stars;
                  }).map( (item) =>{
                    return{...item, value:item.stars}
                  } ).slice(0,5)

                  console.log('mostPopular',mostPopular)

  // Size and forks

  let { stars, forks } = repos.reduce(
     (total, item) =>{
    const { stargazers_count, name, forks} = item;
    total.stars[stargazers_count] = {label: name, value:stargazers_count};
    total.forks[forks] = {label:name, value:forks}
    return total

  }, { stars:{}, forks:{} } )

stars = Object.values(stars).slice(-5).reverse()
forks = Object.values(stars).slice(-5).reverse()

  // console.log(languages)

    // const data= [
    //     {
    //       label: "Python",
    //       value: "120"
    //     },
    //     {
    //       label: "R",
    //       value: "260"
    //     },
    //     {
    //       label: "Java Script",
    //       value: "180"
    //     }
    //   ];
    return (
        <div className="mt-5 charts">
            {/* <Example/> */}
            <div className="charts__firstrow">
              <Pie3d data={mostUsed}/>
              <Doughnut data={mostPopular}/>
            </div>
            <div className="charts__secondrow mt-5">
              <Spline data={stars}/>
              <Forks data={forks}/>
            </div>
        </div>
    )
}

export default Charts
