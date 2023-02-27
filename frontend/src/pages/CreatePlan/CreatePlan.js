import { useState } from "react";
import { AddExcerciseModal, Button } from "../../components";
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Text,
  RedText,
  WorkoutsWrapper,
  Row,
  Col,
  Error,
} from "./CreatePlan.styled";
import Axios from "../../lib/axios";
import { faT, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreatePlan = () => {
  const [openModal, setOpenModal] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    excname: false,
    excseriesCount: false,
    excunit: false,
  });

  const [trainingPlan, setTrainingPlan] = useState({
    userId: "va9867dasd58asd4asd657",
    name: "Nazwa planu treningowego",
    workouts: [],
  });

  const [excercise, setExcercise] = useState({
    name: "Ćwiczenie",
    seriesCount: 4,
    repeats: 0,
    series: [],
    unit: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setTrainingPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const seriesHandler = () => {};

  const excHandler = (e) => {
    const { name, value } = e.target;
    setExcercise((prevState) => ({
      ...prevState,
      [name]:
        name === "seriesCount" || name === "repeats" ? Number(value) : value,
    }));
  };

  const addExcercise = () => {
    if (
      excercise.name !== "" &&
      excercise.series !== 0 &&
      excercise.seriesCount !== 0
    ) {
      setTrainingPlan((prevState) => ({
        ...prevState,
        workouts: [...prevState.workouts, excercise],
      }));

      for (let i = 1; i <= excercise.seriesCount; i++) {
        console.log(i);
        setExcercise((prevState) => ({
          ...prevState,
          series: [
            ...prevState.series,
            {
              serie: i,
              repeats: 0,
              score: 0,
              lastRepeats: 0,
              lastScore: 0,
              timeSpend: 0,
            },
          ],
        }));
      }

      setExcercise({
        name: "",
        seriesCount: 0,
        repeats: 0,
        series: [],
        unit: "",
      });
    }
  };

  const checkExcercise = () => {
    let noError = true;
    for (const excItem in excercise) {
      if (
        excercise[excItem].length === 0 ||
        excercise[excItem] === 0 ||
        excercise[excItem] === ""
      ) {
        if (errors.hasOwnProperty("exc" + excItem)) {
          setErrors((prevState) => ({
            ...prevState,
            ["exc" + excItem]: true,
          }));
          noError = false;
        }
      } else {
        setErrors((prevState) => ({ ...prevState, ["exc" + excItem]: false }));
      }
    }

    //sprawdź czy error
    noError && addExcercise();
  };

  const deleteExcercise = (index) => {
    const filteredArr = trainingPlan.workouts.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setTrainingPlan((prevState) => ({ ...prevState, workouts: filteredArr }));
  };

  const formSubmit = (e) => {
    // let noError = true;
    e.preventDefault();
    // for (const planItem in trainingPlan) {
    //   if (
    //     trainingPlan[planItem].length === 0 ||
    //     trainingPlan[planItem] === 0 ||
    //     trainingPlan[planItem] === ""
    //   ) {
    //     if (errors.hasOwnProperty(planItem)) {
    //       setErrors((prevState) => ({ ...prevState, [planItem]: true }));
    //       noError = false;
    //     }
    //   } else {
    //     setErrors((prevState) => ({ ...prevState, [planItem]: false }));
    //   }
    // }

    console.log(trainingPlan);
    Axios.addPlan(trainingPlan);
  };

  return (
    <Wrapper>
      <Title>Add workout</Title>
      <Form onSubmit={(e) => formSubmit(e)}>
        <Label>
          <Text>
            Workout name: <RedText>*</RedText>
          </Text>
          <Input
            name="name"
            type="text"
            value={trainingPlan.name}
            onChange={(e) => inputHandler(e)}
          />
          {errors.name && <Error>Podaj nazwę planu treningowego!</Error>}
        </Label>

        <Button
          text="Add excercise"
          type="button"
          fun={() => setOpenModal(true)}
          className="form__button"
        />

        {trainingPlan.workouts.map((item, index) => {
          return (
            <Row className="row row__excerciseName">
              <Col className="col__excerciseDetails">
                <Text>Nazwa: {item.name}</Text>
                <Text className="excercise__details">
                  Series: {item.seriesCount}
                </Text>
              </Col>
              <Col className="col__excerciseDelete">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteExcercise(index)}
                  className="excercise__delete"
                />
              </Col>
            </Row>
          );
        })}

        {trainingPlan.workouts.length >= 3 ? (
          <Button text="Dodaj plan" type="submit" />
        ) : (
          <Error className="error__info">
            To create your workout plan you need to add at least 3 excercises!
          </Error>
        )}
      </Form>
      {openModal && (
        <AddExcerciseModal
          setOpenModal={setOpenModal}
          setTrainingPlan={setTrainingPlan}
        />
      )}
    </Wrapper>
  );
};

export default CreatePlan;
