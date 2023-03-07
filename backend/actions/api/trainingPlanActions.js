const {
  TrainingPlan,
  TrainingPlanWorkout,
} = require("../../db/models/trainingPlan");
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
    const { userId, name, workouts, repeats, seriesCount } = req.body;
    // console.log();
    let data;
    try {
      data = await TrainingPlan({
        userId,
        name,
        workouts,
      }).save();
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.status(201).json("Plan created successfully");
  }

  async findExcById(req, res) {
    console.log(req.body);
    const { excerciseId, serieId, series, repeats, score } = req.body;
    let data;
    try {
      data = await TrainingPlan.findOne({
        workouts: {
          $elemMatch: {
            _id: excerciseId,
            series: {
              _id: serieId,
            },
          },
        },
      });
      console.log(req.body);
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.send(data);
  }

  async editWorkoutInPlan(req, res) {
    const { excerciseId, serieId, repeats, score } = req.body;
    let data;
    try {
      data = await TrainingPlan.updateOne(
        {
          workouts: {
            $elemMatch: {
              _id: excerciseId,
              series: {
                $elemMatch: {
                  _id: serieId,
                },
              },
            },
          },
        },
        {
          $set: {
            "workouts.$[outer].series.$[inner].repeats": repeats,
            "workouts.$[outer].series.$[inner].score": score,
          },
        },
        {
          arrayFilters: [
            { "outer._id": excerciseId },
            { "inner._id": serieId },
          ],
        }
      );

      console.log(data);
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.status(200).json("Edited successfully");
  }
}

module.exports = new TrainingPlanActions();
