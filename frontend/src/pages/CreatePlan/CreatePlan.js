import { useState } from "react";
import { Button } from "../../components";
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Text,
  RedText,
  WorkoutsWrapper,
  WorkoutsTable,
  Row,
  Col,
  Error,
  DeleteExcercise,
  Select,
  Option,
} from "./CreatePlan.styled";
import Axios from "../../lib/axios";

const CreatePlan = () => {
  const [errors, setErrors] = useState({
    name: false,
    description: false,
    excname: false,
    excseries: false,
    excrepeats: false,
    excunit: false,
  });

  const [trainingPlan, setTrainingPlan] = useState({
    userId: "va9867dasd58asd4asd657",
    name: "",
    description: "",
    workouts: [],
    message: "",
  });

  const [excercise, setExcercise] = useState({
    name: "",
    series: 0,
    repeats: 0,
    score: 0,
    lastScore: 0,
    unit: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setTrainingPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const excHandler = (e) => {
    const { name, value } = e.target;
    console.log(typeof value, name);
    setExcercise((prevState) => ({
      ...prevState,
      [name]: name === "series" || name === "repeats" ? Number(value) : value,
    }));
  };

  const addExcercise = () => {
    if (
      excercise.name !== "" &&
      excercise.repeats !== 0 &&
      excercise.series !== 0
    ) {
      setTrainingPlan((prevState) => ({
        ...prevState,
        workouts: [...prevState.workouts, excercise],
      }));
      setExcercise({
        name: "",
        series: "",
        repeats: "",
        score: 0,
        lastScore: 0,
        unit: "",
      });
    }
  };

  const checkExcercise = () => {
    let noError;

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
        noError = true;
      }
    }

    //sprawdź czy error
    console.log(noError, errors, excercise);

    noError && addExcercise();
  };

  const deleteExcercise = (index) => {
    const filteredArr = trainingPlan.workouts.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setTrainingPlan((prevState) => ({ ...prevState, workouts: filteredArr }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    for (const planItem in trainingPlan) {
      if (trainingPlan[planItem].length === 0) {
        errors.hasOwnProperty(planItem) &&
          setErrors((prevState) => ({ ...prevState, [planItem]: true }));
      } else {
        setErrors((prevState) => ({ ...prevState, [planItem]: false }));
      }
    }
    console.log(trainingPlan);
    Axios.addPlan(trainingPlan);
  };

  return (
    <Wrapper>
      <Title>Kreator twojego planu treningowego</Title>
      <Form onSubmit={(e) => formSubmit(e)}>
        <Label>
          <Text>
            Nazwa twojego planu: <RedText>*</RedText>
          </Text>
          <Input
            name="name"
            type="text"
            value={trainingPlan.name}
            onChange={(e) => inputHandler(e)}
          />
          {errors.name && <Error>Podaj nazwę planu treningowego!</Error>}
        </Label>
        <Label>
          <Text>
            Opis twojego planu: <RedText>*</RedText>
          </Text>
          <Input
            name="description"
            type="text"
            value={trainingPlan.description}
            onChange={(e) => inputHandler(e)}
          />
          {errors.description && (
            <Error>Dodaj opis do swojego planu treningowego!</Error>
          )}
        </Label>

        <WorkoutsWrapper>
          <Label>
            <Text>
              Nazwa ćwiczenia: <RedText>*</RedText>
            </Text>
            <Input
              name="name"
              value={excercise.name}
              onChange={(e) => excHandler(e)}
            />
            {errors.excname && <Error>Jakie ćwiczenie?</Error>}
          </Label>
          <Label>
            <Text>
              Ilość serii: <RedText>*</RedText>
            </Text>
            <Input
              name="series"
              type="number"
              min={0}
              value={excercise.series}
              onChange={(e) => excHandler(e)}
            />
            {errors.excseries && <Error>Ile serii?</Error>}
          </Label>
          <Label>
            <Text>
              Ilość powtórzeń: <RedText>*</RedText>
            </Text>
            <Input
              name="repeats"
              type="number"
              min={0}
              max={30}
              value={excercise.repeats}
              onChange={(e) => excHandler(e)}
            />
            {errors.excrepeats && <Error>Ile powtórzeń?</Error>}
          </Label>

          <Label>
            <Text>
              Jednostka: <RedText>*</RedText>
            </Text>
            <Select onChange={(e) => excHandler(e)} name="unit">
              <Option value="">wybierz...</Option>
              <Option value="kg">kg</Option>
              <Option value="x">powtórzenia</Option>
              <Option value="min">min</Option>
            </Select>
            {errors.excunit && <Error>Jaka jednostka?</Error>}
          </Label>
        </WorkoutsWrapper>
        <Button text="+" type="button" fun={checkExcercise} />

        {trainingPlan.workouts.length > 0 && (
          <WorkoutsTable>
            <Row>
              <Col>Ćwiczenie</Col>
              <Col>Serie</Col>
              <Col>Powtórzenia</Col>
            </Row>
            {trainingPlan.workouts.map((item, index) => {
              return (
                <Row key={index}>
                  <Col>{item.name}</Col>
                  <Col>{item.series}</Col>
                  <Col>{item.repeats}x</Col>
                  <DeleteExcercise onClick={() => deleteExcercise(index)} />
                </Row>
              );
            })}
          </WorkoutsTable>
        )}
        <Button text="Dodaj plan" type="submit" />
      </Form>
    </Wrapper>
  );
};

export default CreatePlan;
