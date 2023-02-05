import axios from "axios";

class Axios {
  async postWorkout(workout) {
    console.log(workout);
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${process.env.REACT_APP_DB}/add`,
      data: workout,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response.data));
  }
}

export default new Axios();
