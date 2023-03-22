import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'

function ExerciseDetail() {

    const { id } = useParams()
    const[DetailExercise, setDetailExercise] = useState({})

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '49b8e74506msh1abb6f2e7928472p17a280jsn5f2d21541da0',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        
        fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, options)
            .then(response => response.json())
            .then(data => setDetailExercise(data))
            .catch(err => console.error(err));
    }, [])
    console.log(DetailExercise)

  return (
    <div className='detail-cont'>
        <div className='gif'>
            <img src={DetailExercise.gifUrl}  />
        </div>
        <div className='detail-info'>
            <h1>{DetailExercise.name}</h1>
            <p>
                The standard chunk of Lorem Ipsum used since the 
                1500s is reproduced below for those interested.
                Sections 1.10.32 and 1.10.33 from "de Finibus 
                Bonorum et Malorum" by Cicero are also reproduced 
            </p>
            <div className='row'>

            <div className='info-exc'>
                <img src='https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/icons/body-part.png' />
                <div className='rectangle' />
                <span>{DetailExercise.bodyPart}</span>
            </div>
            <div className='info-exc'>
                <img src='https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/icons/target.png' />
                <div className='rectangle' />
                <span>{DetailExercise.target}</span>
            </div>
            <div className='info-exc'>
                <img src='https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/icons/equipment.png' />
                <div className='rectangle' />
                <span>{DetailExercise.equipment}</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ExerciseDetail