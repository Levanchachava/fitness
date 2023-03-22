import React from 'react'
import "./herobanner.css"

function HeroBanner() {
  return (
    <div className='hero-cont'>
        <div className='fitness-club-info'>
            <h2>Fitness Club</h2> 
            <h1>Sweat, Smile <br/> And Repeat </h1>
            <p>Check out the most offective exercise personalized to you</p>
            <button>Explore Exercises</button>   
        </div>
        <div className='banner-img'>
            <img className='banner' src='https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/images/banner.png' />
        </div>
    </div>
  )
}

export default HeroBanner