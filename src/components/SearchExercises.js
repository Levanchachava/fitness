import React, { useState, useEffect } from 'react'
import "./searchexercise.css"

function SearchExercises({Exercise, setExercises}) {
    const[search, setSearch] = useState("legs")
    const[ExerciseData, setExerciseData] = useState([])

    const HandleSearch =  () => {
        if(search) {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '49b8e74506msh1abb6f2e7928472p17a280jsn5f2d21541da0',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };
            
            fetch('https://exercisedb.p.rapidapi.com/exercises', options)
                .then(response => response.json())
                .then(data => setExerciseData(data))

            const searchedExercises = ExerciseData.filter((item) => item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search),)

            setSearch("")
            setExercises(searchedExercises)
            console.log(Exercise)
    }
}
    useEffect(()=> {
    HandleSearch()
}, [])

  return (
    <div className='searche-exc-cont'>
        
        <h1>Awesome Exercise You <br/> Should know</h1>
        <div className='search'>
            <input placeholder='Search Exercises' value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={()=>HandleSearch()} >Search</button>
        </div>
    </div>
  )
}


export default SearchExercises