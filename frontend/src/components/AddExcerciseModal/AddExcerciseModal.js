import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  Label,
  Wrapper,
  Text,
  Input,
  Select,
  Option,
  Row,
} from "./AddExcerciseModal.styled";
import { Button } from "../index";
import { useState } from "react";

const AddExcerciseModal = ({ setOpenModal, setTrainingPlan }) => {
  const [excercise, setExcercise] = useState({
    name: "",
    seriesCount: 0,
    repeats: 0,
    series: [],
    unit: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setExcercise((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addSerie = () => {
    setExcercise((prevState) => ({
      ...prevState,
      seriesCount: prevState.seriesCount + 1,
      series: [
        ...prevState.series,
        {
          serie: prevState.seriesCount + 1,
          repeats: 0,
          score: 0,
          lastRepeats: 0,
          lastScore: 0,
          timeSpend: 0,
        },
      ],
    }));
  };

  const removeSerie = () => {
    const serie = excercise.seriesCount;
    const filteredSeries = excercise.series.filter(
      (item) => item.serie !== serie
    );
    setExcercise((prevState) => ({
      ...prevState,
      seriesCount: prevState.seriesCount >= 1 && prevState.seriesCount - 1,
      series: filteredSeries,
    }));
  };
  const submitExcercise = () => {
    setTrainingPlan((prevState) => ({
      ...prevState,
      workouts: [...prevState.workouts, excercise],
    }));
    setOpenModal(false);
  };
  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faClose}
        className="modal__icon"
        onClick={() => setOpenModal(false)}
      />
      <Label>
        <Text>Excercise: </Text>
        <Input
          name="name"
          value={excercise.name}
          onChange={(e) => inputHandler(e)}
        />
      </Label>

      <Label>
        <Text>Series: </Text>
        <Row className="modal__addSerie">
          <Input
            name="seriesCount"
            type="number"
            value={excercise.seriesCount}
            onChange={(e) => inputHandler(e)}
            disabled
          />
          <Button text="+" className="modal__button" fun={addSerie} />
          <Button
            text="-"
            className="modal__button"
            fun={removeSerie}
            style="delete"
          />
        </Row>
      </Label>

      <Label>
        <Text>Unit:</Text>
        <Select name="unit" onChange={(e) => inputHandler(e)} value={excercise.unit}>
          <Option value="">choose...</Option>
          <Option value="kg">kg</Option>
          <Option value="x">repeats</Option>
          <Option value="min">minutes</Option>
        </Select>
      </Label>
      <Button
        text="Add excercise"
        className="modal__button"
        fun={submitExcercise}
      />
    </Wrapper>
  );
};

export default AddExcerciseModal;

// {
//           serie: i,
//           repeats: 0,
//           score: 0,
//           lastRepeats: 0,
//           lastScore: 0,
//           timeSpend: 0,
//         },
