import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext';


const WorkoutForm = () => {

    const {dispatch} = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workout/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        } else {

            setError(null);
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new Workout added', json)

            dispatch({type: 'CREATE_WORKOUT',payload:json})
        }

    }

    return (
        <div>
            <form className='create' onSubmit={handleSubmit}>
                <h3>Add a New workout !</h3>

                <label> Exicese Title :</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />

                <label> Load in Kg :</label>
                <input type='Number' value={load} onChange={(e) => setLoad(e.target.value)} />

                <label>Reps :</label>
                <input type='Number' value={reps} onChange={(e) => setReps(e.target.value)} />

                <button >Add Workout</button>

                {error && <div className='error'> {error}</div>}
            </form>
        </div>
    )
}

export default WorkoutForm
