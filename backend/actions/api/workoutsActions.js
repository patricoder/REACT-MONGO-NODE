const { Workout } = require("../../db/models/workout");

class WorkoutsActions {
  async showWorkouts(req, res) {
    let data;
    try {
      data = await Workout.find({});
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.status(200).json(data);
  }

  async addWorkout(req, res) {
    //   body: { name: 'nazwa1', category: 'gym/calistenics', part: 'partia ciała' },
    const { name, category, part } = req.body;
    console.log(req.body);
    let data;
    try {
      data = await Workout({
        name,
        category,
        part,
      }).save();
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.status(200).json("Dodano pomyślnie do bazy.");
  }

  async deleteWorkout(req, res) {
    const id = req.params.id;
    //usuwanie notatki
    try {
      await Workout.deleteOne({
        _id: id,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.status(200).json({ message: "Ćwiczenie usunięte pomyślnie." });
  }
}

module.exports = new WorkoutsActions();
