import React from 'react'
import EachExercise from './EachExercise'
import './exercise.css'

function Exercises({Exercise}) {

    const SliceData = Exercise.slice(0, 20)
  return (
    <div className='exercise-cont'>
          {SliceData.map(item => 
            <EachExercise key={item.id} item={item} />
        )}
    </div>
  )
}

export default Exercises