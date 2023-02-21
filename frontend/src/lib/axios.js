import axios from "axios";
import { NotificationManager } from "react-notifications";

class Axios {
  async postWorkout(workout) {
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${process.env.REACT_APP_DB}/add`,
      data: workout,
    })
      .then((res) => {
        console.log(res);
        NotificationManager.success(res.data);
      })
      .catch((error) => {
        console.log(error);
        error.response?.data
          ? NotificationManager.error(error.response.data)
          : NotificationManager.error(error.message);
      });
  }

  async showWorkouts() {
    let data;
    try {
      data = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB}/all`,
      });
      // setExcersises(data.data);
    } catch (error) {
      throw new Error(error);
    }
    return data;
  }

  async deleteWorkout(id) {
    try {
      const res = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_DB}/excersise/${id}`,
      });
      console.log(res);
      NotificationManager.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async addPlan(data) {
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${process.env.REACT_APP_DB}/training-plan`,
      data,
    })
      .then((res) => {
        console.log(res);
        // NotificationManager.success(res.data);
      })
      .catch((error) => {
        console.log(error);
        // error.response?.data
        //   ? NotificationManager.error(error.response.data)
        //   : NotificationManager.error(error.message);
      });
  }
}

export default new Axios();
