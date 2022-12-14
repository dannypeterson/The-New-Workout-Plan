import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'

const IndivWorkout = (props) => {
  const navigate = useNavigate()

  const [workout, setWorkout] = useState([])

  const { id } = useParams()

  const getExercises = async () => {
    const response = await axios.get(`/api/myworkouts/${id}`)
    setWorkout(response.data)
  }

  useEffect(() => {
    getExercises()
  }, [])

  const updateWorkout = () => {
    props.setFormState({
      name: workout.name,
      exercises: [...workout.exercises]
    })
    navigate(`/myworkouts/${id}/update`)
  }

  const deleteWorkout = async () => {
    const response = await axios.delete(`/api/myworkouts/${id}`)
    navigate('/myworkouts')
  }

  return (
    <div>
      <Header />
      <h1 id="myworkouts">{workout.name}</h1>
      {workout.exercises?.length > 0 &&
        workout.exercises.map((exercise) => (
          <div className="customworkout" key={exercise._id}>
            <h1 id="exercisename">{exercise.name}</h1>
            <h2 id="sets">
              {exercise.sets}x{exercise.reps} <button>&#10006;</button>
            </h2>
          </div>
        ))}
      <div id="workoutbuttons">
        <div>
          <button className="addexercise" onClick={() => updateWorkout()}>
            Add exercises
          </button>
          <button className="deleteexercise" onClick={() => deleteWorkout()}>
            Delete Workout
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndivWorkout
