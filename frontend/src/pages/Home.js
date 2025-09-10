// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'

//Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
// import { WorkoutContext } from '../context/WorkoutContext';
import { useWorkoutsContext } from '../hooks/useWorkoutContext';


const Home = () => {

  // USeState
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkout = async () => {
      //  const response = awaitfetch('/api/workout/')

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/workout/`)
      const json = await response.json()

      if (response.ok) {
        //UseState
        // setWorkouts(json)

        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }
    fetchWorkout()
  }, [dispatch])

  return (
    <div className='home'>
      <div className='workouts'>
        {
          workouts && workouts.map((workout) => (
            // <p key={workout._id}>{workout.title}</p>
            <WorkoutDetails key={workout._id} workout={workout} />

          ))
        }
      </div>
      <WorkoutForm />

    </div>
  )
}

export default Home
