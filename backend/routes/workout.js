const express = require("express");
const Workout = require("../models/workoutModel");
const { createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController");

const router = express.Router();

/**
 * Routes : /api/workout/
 * Method :GET
 * Description : Get All Workout
 * Access : public
 * Parameters: none
 */

router.get("/", getAllWorkouts)

/**
 * Routes : /api/workout/
 * Method :POST
 * Description : Create a new workout
 * Access : public
 * Parameters: none
 */

router.post("/",createWorkout )


/**
 * Routes : /api/workout/:id
 * Method :GET
 * Description : Get a specific workout
 * Access : public
 * Parameters: id
 */

router.get("/:id", getWorkout)


/**
 * Routes : /api/workout/:id
 * Method :DELETE
 * Description : delete a specific workout
 * Access : public
 * Parameters: id
 */

router.delete("/:id", deleteWorkout)

/**
 * Routes : /api/workout/:id
 * Method :PATCH
 * Description : Update a specific workout
 * Access : public
 * Parameters: id
 */

router.patch("/:id", updateWorkout)

module.exports = router