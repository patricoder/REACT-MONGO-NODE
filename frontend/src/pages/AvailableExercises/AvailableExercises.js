import { useEffect, useState } from "react";
import axios from "axios";
import Axio from "../../lib/axios";
import { Col, DeleteWorkout, Row, Wrapper } from "./AvailableExercises.styled";
import { Loading } from "../../components";
const AvailableExercises = () => {
  const [excersises, setExcersises] = useState([]);
  const [updateExcersises, setUpdateExcersises] = useState(true);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const data = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB}/all`,
      });
      setExcersises(data.data);
    } catch (error) {
      // throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteExcersise = (id) => {
    console.log(id);
    Axio.deleteWorkout(id);
    setUpdateExcersises(!updateExcersises);
  };

  useEffect(() => {
    fetchData();
  }, [updateExcersises]);
  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      <Row>
        <Col>Nazwa ćwiczenia</Col>
        <Col>Kategoria</Col>
        <Col>Partia</Col>
      </Row>
      {excersises && excersises.map((item) => {
        return (
          <Row key={item._id}>
            <Col>{item.name}</Col>
            <Col>{item.category}</Col>
            <Col>{item.part}</Col>
            <DeleteWorkout onClick={() => deleteExcersise(item._id)} />
          </Row>
        );
      })}
    </Wrapper>
  );
};

export default AvailableExercises;
