import { useEffect } from "react";
import { Button } from "../index";
import {
  Input,
  Label,
  Row,
  Wrapper,
  Text,
  Select,
  Option,
  Title,
} from "./EditExcerciseModal.styled";
const EditExcerciseModal = ({
  onEdit,
  onCancel,
  item,
  editData,
  setEditData,
}) => {
  const getSeriesId = (id) => {
    console.log("seriesid", id);
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

  useEffect(() => {
    // console.log(item);
    setEditData((prevState) => {
      return {
        ...prevState,
        excerciseId: item._id,
      };
    });
  }, []);

  //   planId: "",
  // excerciseId: "",
  // series: 0,
  // repeats: 0,
  // score: 0,
  return (
    <Wrapper>
      <Title>{item.name}</Title>
      <Label>
        <Text>Series</Text>
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
      </Label>
      <Label>
        <Text>Repeats</Text>
        <Input
          name="repeats"
          value={editData.repeats}
          onChange={(e) => inputHandler(e)}
        />
      </Label>
      <Label>
        <Text>Score</Text>
        <Input
          name="score"
          value={editData.score}
          onChange={(e) => inputHandler(e)}
        />
      </Label>
      <Row className="buttons__wrapper">
        <Button text="edytuj" fun={onEdit} />
        <Button text="anuluj" style={"delete"} fun={onCancel} />
      </Row>
    </Wrapper>
  );
};

export default EditExcerciseModal;
