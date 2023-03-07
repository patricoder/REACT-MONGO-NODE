import { useState } from "react";
import { AddExcerciseModal, Button, Portal } from "../../components";
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
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreatePlan = () => {
  const [openModal, setOpenModal] = useState(false);
  // let errors = {};
  const [errors, setErrors] = useState({});
  const [trainingPlan, setTrainingPlan] = useState({
    userId: "va9867dasd58asd4asd657",
    name: "",
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

  const deleteExcercise = (index) => {
    const filteredArr = trainingPlan.workouts.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setTrainingPlan((prevState) => ({ ...prevState, workouts: filteredArr }));
  };

  const validate = (values) => {
    let errors = {};
    // const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Field 'Workout name' is required!";
    }
    if (values.workouts.length <= 2) {
      errors.workout =
        "To create workout plan you need to add at least 3 excercises";
    }
    if (Object.keys(errors).length === 0) {
      console.log("Brak błędów!");
      setTrainingPlan({
        userId: "va9867dasd58asd4asd657",
        name: "",
        workouts: [],
      });
      Axios.addPlan(trainingPlan);
    }
    return errors;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(trainingPlan));
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
          {errors.name && <Error>{errors.name}</Error>}
        </Label>

        <Button
          text="Add excercise"
          type="button"
          fun={() => setOpenModal(true)}
          className="form__button"
        />

        {trainingPlan.workouts.map((item, index) => {
          return (
            <Row className="row row__excerciseName" key={index}>
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

        <Button text="Create" type="submit" />
        {errors.workout && <Error>{errors.workout}</Error>}
      </Form>
      {openModal && (
        <Portal closeModal={() => setOpenModal(false)}>
          <AddExcerciseModal
            errors={errors}
            setErrors={setErrors}
            setOpenModal={setOpenModal}
            setTrainingPlan={setTrainingPlan}
          />
        </Portal>
      )}
    </Wrapper>
  );
};

export default CreatePlan;
