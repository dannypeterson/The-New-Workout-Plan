const { Schema } = require('mongoose')

const MyWorkout = new Schema(
  {
    name: { type: String, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  },
  { timestamps: true }
)

module.exports = MyWorkout
