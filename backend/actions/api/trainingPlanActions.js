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
    res.send(req.body);
  }

  async findExcById(req, res) {
    console.log(req.body);
    const { series, repeats, score, excerciseId } = req.body;
    let data;
    try {
      data = await TrainingPlan.findOne({
        workouts: {
          $elemMatch: {
            _id: excerciseId,
            series: {
              $elemMatch: {
                serie: series,
              },
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
    const { series, repeats, score, excerciseId } = req.body;
    let data;
    try {
      // data = await TrainingPlan.find({
      //   _id: planId,
      //   workouts: {
      //     $elemMatch: {
      //       _id: excId,
      //     },
      //   },
      // });

      data = await TrainingPlan.updateOne(
        {
          workouts: {
            $elemMatch: {
              _id: excerciseId,
              series: {
                $elemMatch: {
                  serie: series,
                },
              },
            },
          },
        },
        {
          $set: {
            "workouts.$[outer].series.$[inner].repeats": 1000,
            "workouts.$[outer].series.$[inner].score": 2000,
          },
        },
        {
          arrayFilters: [{ "outer._id": excId }, { "inner._id": serieId }],
        }
      );

      console.log(data);
    } catch (error) {
      return res.status(400).send(error.message);
    }
    res.send(data);
  }
}

module.exports = new TrainingPlanActions();
