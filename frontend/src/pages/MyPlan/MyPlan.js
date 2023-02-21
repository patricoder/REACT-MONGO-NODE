import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../../components";
import { useParams } from "react-router-dom";
import {
  ExcerciseWrapper,
  Title,
  Wrapper,
  Text,
  Details,
  Row,
} from "./MyPlan.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const MyPlan = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getPlanById = async (planId) => {
    let data;
    try {
      data = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB}/training-plan/${planId}`,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setData(data.data);
      setLoading(false);
    }
  };

  const editExcercise = (planId, excId) => {
    console.log(data);
    console.log("PLAN O ID: ", planId);
    console.log("edit: ", excId);
  };

  useEffect(() => {
    getPlanById(id);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      {/* <Title>{data.name}</Title>
      <Title>{data.description}</Title> */}
      {data.workouts.map((item) => {
        return (
          <ExcerciseWrapper key={item._id}>
            <Row>
              <Text className="exc-name">{item.name}</Text>
              <FontAwesomeIcon
                icon={faEdit}
                className="exc-edit"
                onClick={() => editExcercise(id, item._id)}
              />
            </Row>
            <Details>
              <Text>Serie: {item.series}</Text>
              <Text>Powtórzenia: {item.repeats}x</Text>
              <Text>
                Wynik:
                {item.score <= 0 ? " Dodaj pierwszy wynik." : item.score + item.unit}
              </Text>
            </Details>
          </ExcerciseWrapper>
        );
      })}
    </Wrapper>
  );
};

export default MyPlan;
