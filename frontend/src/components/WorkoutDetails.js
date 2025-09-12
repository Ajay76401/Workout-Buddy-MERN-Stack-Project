import React from 'react'

const WorkoutDetails = ({ workout, handleDelete }) => {
    
    return (
        <div className='workout-details'>
            <div className='workout-details-left'>
                <h4> {workout.title}</h4>
                <p> <strong> load (in kg) :</strong> {workout.load}</p>
                <p> <strong> Reps :</strong> {workout.reps}</p>
                <p>{workout.createdAt}</p>
            </div>
            <div className='workout-details-right'>
                <button onClick={() => handleDelete(workout._id)}> Delete</button>
            </div>
        </div>
    )
}

export default WorkoutDetails
