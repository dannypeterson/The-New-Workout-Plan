const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exercise = new Schema(
  {
    name: { type: String, required: true },
    bodyParts: [{ type: String, required: true }],
    description: { type: String, required: true },
    equipment: { type: String, required: true },
    sets: { type: Number, required: false },
    reps: { type: String, required: false },
    rpe: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = Exercise