import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, ErrorMsg } from "../index";
import {
  Input,
  Label,
  Row,
  Container,
  Text,
  Select,
  Option,
  Title,
  Wrapper,
  Sup,
} from "./EditExcerciseModal.styled";
const EditExcerciseModal = ({
  onEdit,
  onCancel,
  item,
  editData,
  setEditData,
}) => {
  const [errors, setErrors] = useState({});
  const [showRepeats, setShowRepeats] = useState(true);
  const validate = (values) => {
    let error = {};
    if (values.series === 0) {
      error.series = "Field 'Series' is required!";
    }

    if (showRepeats === false) {
      error.repeats = "Field 'Repeats' can't be equal to 0!";
    }
    if (values.score === 0) {
      error.score = "Field 'Score' can't be equal to 0!";
    }
    if (Object.keys(error).length === 0) {
      onEdit();
    }
    return error;
  };

  const setValueAfterSelect = (e) => {
    const getValues = item.series.find(
      (item) => item.serie === Number(e.target.value)
    );
    setEditData((prevState) => ({
      ...prevState,
      repeats: getValues.repeats,
      score: getValues.score,
    }));
  };

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setEditData((prevState) => {
      return {
        ...prevState,
        [name]: Number(value),
      };
    });
  };

  const submitEdit = () => {
    setErrors(validate(editData));
  };

  useEffect(() => {
    setEditData((prevState) => {
      return {
        ...prevState,
        excerciseId: item._id,
      };
    });
  }, []);
  return (
    <Wrapper>
      <Container>
        <Title>{item.name}</Title>
        <Label>
          <Text>Series</Text>
          <Sup>(You want to edit)</Sup>
          <Select
            name="series"
            value={editData.series}
            onChange={(e) => {
              inputHandler(e);
              setValueAfterSelect(e);
            }}
          >
            <Option value="">choose...</Option>
            {item.series.map((item) => {
              return (
                <Option value={item.serie} key={item._id}>
                  {item.serie}
                </Option>
              );
            })}
          </Select>
          {errors.series && <ErrorMsg>{errors.series}</ErrorMsg>}
        </Label>
        <Label>
          <Text>Repeats</Text>
          <Sup>(You assume to do)</Sup>
          <Row className="optional__repeats">
            <Switch onChange={() => setShowRepeats(!showRepeats)} />
            <Input
              type="text"
              disabled={showRepeats}
              name="repeats"
              value={editData.repeats}
              onChange={(e) => inputHandler(e)}
            />
          </Row>
          {errors.repeats && <ErrorMsg>{errors.repeats}</ErrorMsg>}
        </Label>
        <Label>
          <Text>Score</Text>
          <Sup>(You did)</Sup>
          <Input
            type="text"
            name="score"
            value={editData.score}
            onChange={(e) => inputHandler(e)}
          />
          {errors.score && <ErrorMsg>{errors.score}</ErrorMsg>}
        </Label>
        <Row>
          <Button text="edytuj" fun={submitEdit} />
          <Button text="anuluj" style={"delete"} fun={onCancel} />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default EditExcerciseModal;
