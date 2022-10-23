const { Exercise, MuscleGroup } = require('../models/')
const db = require('../db')

//functions for router
const getExerciseById = async (req, res) => {
  try {
    const { id } = req.params
    const exercise = await Exercise.findById(id)
    if (!exercise) throw Error('Exercise not found!')
    res.json(exercise)
  } catch (error) {
    console.log(error)
    res.send('Exercise not found.')
  }
}

const findMuscleGroups = async (req, res) => {
  const group = await MuscleGroup.find()
  res.json(group)
}

const getAllExercises = async (req, res) => {
  const exercise = await Exercise.find()
  res.json(exercise)
}

const getChestExercises = async (req, res) => {
  const exercise = await MuscleGroup.find({ name: 'Chest' })
  res.json(exercise)
}
const getBackExercises = async (req, res) => {
  const exercise = await MuscleGroup.find({ name: 'Back' })
  res.json(exercise)
}
const getShouldersExercises = async (req, res) => {
  const exercise = await MuscleGroup.find({ name: 'Shoulders' })
  res.json(exercise)
}
const getArmsExercises = async (req, res) => {
  const exercise = await MuscleGroup.find({ name: 'Arms' })
  res.json(exercise)
}
const getLegsExercises = async (req, res) => {
  const exercise = await MuscleGroup.find({ name: 'Legs' })
  res.json(exercise)
}

const deleteExerciseById = async (req, res) => {
  const { id } = req.params
  const deleteExercise = await Exercise.findByIdAndDelete(id)
  if (deleteExercise) {
    return res.send('Exercise deleted')
  }
}

const createExercise = async (req, res) => {
  try {
    const exercise = await new Exercise(req.body)
    await exercise.save()
    return res.status(201).json({
      exercise
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateExercise = async (req, res) => {
  const { id } = req.params
  const exercise = await Exercise.findByIdAndUpdate(id, req.body)
  if (exercise) {
    return res.send('Updated exercise')
  }
}

module.exports = {
  getExerciseById,
  findMuscleGroups,
  getAllExercises,
  createExercise,
  deleteExerciseById,
  updateExercise,
  getChestExercises,
  getBackExercises,
  getShouldersExercises,
  getArmsExercises,
  getLegsExercises
}
