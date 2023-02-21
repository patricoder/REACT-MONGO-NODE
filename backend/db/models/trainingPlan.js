const { Schema, model } = require("mongoose");

// const item = {
//   userId: "nf7643ghf96q94g0h7q3t087h304thy7",
//   name: "Full Body Workout - 1",
//   description: "Plan treningowy całego ciała",
//   workouts: [
//     {
//       name: "Martwy ciąg",
//       series: "4",
//       repeatsRange: "RPT 5/7/8/8",
//       score: "130kg",
//       lastScore: "",
//     },
//     {
//       name: "Podciąganie na drążku podchwytem",
//       series: "3",
//       repeatsRange: "4-12",
//       score: "7x",
//       lastScore: "7",
//     },
//     {
//       name: "Wiosłowanie sztangą w padzie tułowia",
//       series: "3",
//       repeatsRange: "6-8",
//       score: "50kg",
//       lastScore: "50",
//     },
//     {
//       name: "Wyciskanie hantli na płaskiej",
//       series: "3",
//       repeatsRange: "10-12",
//       score: "30kg",
//       lastScore: "50",
//     },
//     {
//       name: "Przysiad bułgarski z hantlami",
//       series: "3",
//       repeatsRange: "8-10",
//       score: "2x16kg",
//       lastScore: "",
//     },
//     {
//       name: "Uginanie ramion z hantlami na ławce skośnej",
//       series: "3",
//       repeatsRange: "8-10",
//       score: "16",
//       lastScore: "",
//     },
//     {
//       name: "Plank",
//       series: "3",
//       repeatsRange: "30sec - 1min",
//       score: "1",
//       lastScore: "",
//     },
//   ],
// };

const TrainingPlanWorkoutSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pole 'Ćwiczenie' jest wymagane!"],
  },
  series: {
    type: Number,
    required: [true, "Pole 'Ilość serii' jest wymagane!"],
  },
  repeats: {
    type: Number,
    required: [true, "Pole 'Ilość powtórzeń' jest wymagane!"],
  },
  unit: {
    type: String, 
    required: [true, "Pole 'Jednostka' jest wymagane!"],
  },
  score: String,
  lastScore: String,
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
  description: String,
  workouts: [TrainingPlanWorkoutSchema],
});

const TrainingPlan = model("TrainingPlan", TrainingPlanSchema);

module.exports = { TrainingPlan };
