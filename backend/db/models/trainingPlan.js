const { Schema, model } = require("mongoose");

const ExcerciseSerieSchema = new Schema({
  serie: Number,
  repeats: Number,
  score: Number,
  lastRepeats: Number,
  lastScore: Number,
  timeSpend: Number,
});

const TrainingPlanWorkoutSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pole 'Ćwiczenie' jest wymagane!"],
  },
  seriesCount: {
    type: Number,
    required: [true, "Pole 'Ilość serii' jest wymagane!"],
  },
  unit: {
    type: String,
    required: [true, "Pole 'Jednostka' jest wymagane!"],
  },
  series: [ExcerciseSerieSchema],
});

const TrainingPlanSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Pole 'Nazwa Planu' jest wymagane!"],
  },
  workouts: [TrainingPlanWorkoutSchema],
});

const TrainingPlan = model("TrainingPlan", TrainingPlanSchema);
const TrainingPlanWorkout = model(
  "TrainingPlanWorkout",
  TrainingPlanWorkoutSchema
);
module.exports = { TrainingPlan, TrainingPlanWorkout };
