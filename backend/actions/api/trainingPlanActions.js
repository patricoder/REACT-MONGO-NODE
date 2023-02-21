const { TrainingPlan } = require("../../db/models/trainingPlan");
const mongoose = require("mongoose");
class TrainingPlanActions {
  async showPlans(req, res) {
    let data;
    try {
      data = await TrainingPlan.find();
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.send(data);
  }

  async getPlanById(req, res) {
    const { id } = req.params;

    let data;
    try {
      data = await TrainingPlan.findOne({
        _id: id,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.send(data);
  }

  async addPlan(req, res) {
    const { userId, name, description, workouts, message } = req.body;
    // console.log();
    let data;
    try {
      data = await TrainingPlan({
        userId,
        name,
        description,
        workouts,
        message,
      }).save();
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.send(req.body);
  }
  
}

module.exports = new TrainingPlanActions();
