import React, { useEffect, useState } from 'react'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import Header from './Header'

function Home() {

  const[Exercise, setExercises] = useState([])
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '49b8e74506msh1abb6f2e7928472p17a280jsn5f2d21541da0',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(err => console.error(err));
  }, [])


  return (
    <div>
        <Header />
        <SearchExercises Exercise={Exercise} setExercises={setExercises} />
        <Exercises Exercise={Exercise} />
    </div>
  )
}

export default Home