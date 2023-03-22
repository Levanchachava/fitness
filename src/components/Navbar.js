import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar-cont'>
        <div className='navbar-info'>
            <div className='navbar-logo'>
                <Link to="/" >
                    <img src='https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/images/Logo-1.png' />
                </Link>
                <Link className='link' to="/"> Home </Link>
                <div className='line' />
                <Link className='link' to="/"> Exercise </Link>
            </div>
        </div>

    

    </div>
  )
}

export default Navbar