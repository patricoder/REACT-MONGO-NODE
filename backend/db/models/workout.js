const { Schema, model } = require("mongoose");

// const CommentSchema = new Schema({
//   _id: [Schema.Types.ObjectId],
//   name: String,
//   email: String,
//   movie_id: [Schema.ObjectId],
//   text: String,
//   date: Date,
// });

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pole 'Nazwa ćwiczenia' jest wymagane!"],
  },
  category: {
    type: String,
    required: [true, "Pole 'Kategoria' jest wymagane!"],
  }, //gym || calistenics
  part: {
    type: String,
    required: [true, "Pole 'Partia' jest wymagane!"],
  }, // part of body
});



// const Comment = model("Comment", CommentSchema);
const Workout = model("Workout", WorkoutSchema);
module.exports = { Workout };
