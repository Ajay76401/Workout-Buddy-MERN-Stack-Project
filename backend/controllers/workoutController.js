const Workout = require('../models/workoutModel')
const mongooge = require('mongoose')

//get all workouts

const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createAt: -1 })

    if (!Workout)
        return res.status(400).json({ error: "No Enties Found" })

    res.status(200).json(workouts)
}

// get a single workout by its id

const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongooge.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Workout exits' })
    }

    const workouts = await Workout.findById(id)
    if (!Workout)
        return res.status(404).json({ error: "No such workout exits" })

    res.status(200).json(workouts)
}

// Create a new Workout 

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workouts = await Workout.create({ title, load, reps });
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// Delete a single workout by its id

const deleteWorkout = async (req, res) => {

    const { id } = req.params;

    if (!mongooge.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Workout exits' })
    }

    const workouts = await Workout.findByIdAndDelete(id)

    if (!workouts) {
        return res.status(400).json({ error: "no such Workout to delete" })
    }
    res.status(200).json({ workouts })
}

// update a single workout by its id

const updateWorkout = async (req, res) => {

    const { id } = req.params;
    if (!mongooge.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Workout exits' })
    }

    const workouts = await Workout.findOneAndUpdate(   {_id:id},   { ...req.body},  { new:true}  )

    if (!Workout) {
        return res.status(400).json({ error: "No such Workout to Update" })

    }
    res.status(200).json({ workouts })
}



module.exports = {
    createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout

}