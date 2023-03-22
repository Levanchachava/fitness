import React from 'react'
import { Link } from 'react-router-dom'
import './exercise.css'


function EachExercise({item}) {
  return (
    <div className='eachexercise-cont'>
        <div className='line-top' />
        <Link to={`exercise/${item.id}`}>
            <img src={item.gifUrl} />
            <h3>{item.name}</h3>
        </Link>
    </div>
  )
}

export default EachExercise