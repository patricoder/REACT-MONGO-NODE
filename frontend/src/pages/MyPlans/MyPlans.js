import { useEffect, useState } from "react";
import { HandPointRight, Loading } from "../../components";
import axios from "axios";
import { Div, Image, Text, Wrapper } from "./MyPlans.styled";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function MyPlans(props) {
  const [myPlans, setMyPlans] = useState();
  const [loading, setLoading] = useState(true);

  const getPlans = async () => {
    let data;
    try {
      data = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB}/training-plans`,
      });
      setMyPlans(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Wrapper className="myplans">
      {myPlans &&
        myPlans.map((item) => {
          return (
            <Wrapper key={item._id}>
              <NavLink to={`${item._id}`} className="myplan">
                <Div className="myplan__leftCol">
                  <Text className="myplan__name">{item.name}</Text>
                  <Text className="myplan__details">
                    {item.workouts.length} excercises
                  </Text>
                </Div>
                <Div className="myplan__rightCol">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="myplan__icon"
                  />
                </Div>
              </NavLink>
            </Wrapper>
          );
        })}
    </Wrapper>
  );
}

export default MyPlans;
