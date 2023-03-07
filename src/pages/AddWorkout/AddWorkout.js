import { Form, Label, Text, Input, Select, Option } from "./AddWorkout.styled";
import { Button } from "../../components";
import { useRef } from "react";
import Axios from "../../lib/axios";
const AddWorkout = () => {
  const name = useRef(null);
  const category = useRef(null);
  const part = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      category: category.current.value,
      part: part.current.value,
    };
    Axios.postWorkout(data);
  };
  return (
    <Form onSubmit={formSubmit}>
      <Label>
        <Text>Nazwa ćwiczenia</Text>
        <Input type="text" ref={name} />
      </Label>
      <Label>
        <Text>Kategoria</Text>
        <Select ref={category}>
          <Option value="">wybierz...</Option>
          <Option value="gym">Siłownia</Option>
          <Option value="calistenics">Kalistenika</Option>
        </Select>
      </Label>
      <Label>
        <Text>Partia</Text>
        <Select ref={part}>
          <Option value="">wybierz...</Option>
          <Option value="abs">Brzuch</Option>
          <Option value="glutes">Pośladki</Option>
          <Option value="quads">Uda</Option>
          <Option value="calves">Łydki</Option>
          <Option value="triceps">Triceps</Option>
          <Option value="biceps">Biceps</Option>
          <Option value="back">Plecy</Option>
          <Option value="shoulders">Barki</Option>
          <Option value="chest">Klatka</Option>
        </Select>
      </Label>
      <Button text={"Dodaj ćwiczenie"} type={"submit"} />
    </Form>
  );
};

export default AddWorkout;
