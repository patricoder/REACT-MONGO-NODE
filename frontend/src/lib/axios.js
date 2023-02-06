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
        NotificationManager.success(res.message);
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error(error.response.data);
      });
  }

  // async showWorkouts() {
  //   try {
  //   } catch (error) {}
  // }
}

export default new Axios();
