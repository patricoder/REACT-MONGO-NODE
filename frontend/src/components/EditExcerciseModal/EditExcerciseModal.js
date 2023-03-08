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
} from "./EditExcerciseModal.styled";
const EditExcerciseModal = ({
  onEdit,
  onCancel,
  item,
  editData,
  setEditData,
}) => {
  const [errors, setErrors] = useState({});
  const validate = (values) => {
    let error = {};
    if (values.series === 0) {
      error.series = "Field 'Series' is required!";
    }
    if (values.repeats === 0) {
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
    <Wrapper onClick={onCancel}>
      <Container>
        <Title>{item.name}</Title>
        <Label>
          <Text>
            Series<sup>(You want to edit)</sup>
          </Text>
          <Select
            name="series"
            value={editData.series}
            onChange={(e) => inputHandler(e)}
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
          <Text>
            Repeats<sup>(You assume to do)</sup>
          </Text>
          <Input
            name="repeats"
            value={editData.repeats}
            onChange={(e) => inputHandler(e)}
          />
          {errors.repeats && <ErrorMsg>{errors.repeats}</ErrorMsg>}
        </Label>
        <Label>
          <Text>
            Score<sup>(You did)</sup>
          </Text>
          <Input
            name="score"
            value={editData.score}
            onChange={(e) => inputHandler(e)}
          />
          {errors.score && <ErrorMsg>{errors.score}</ErrorMsg>}
        </Label>
        <Row className="buttons__wrapper">
          <Button text="edytuj" fun={submitEdit} />
          <Button text="anuluj" style={"delete"} fun={onCancel} />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default EditExcerciseModal;
