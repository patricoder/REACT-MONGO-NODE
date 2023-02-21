import { useEffect, useState } from "react";
import { HandPointRight, Loading } from "../../components";
import axios from "axios";
import { Image, Text, Wrapper } from "./MyPlans.styled";
import { NavLink } from "react-router-dom";
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
            <NavLink to={`${item._id}`} key={item._id}>
              <Wrapper className="myplan">
                <Text>{item.name}</Text>
                <HandPointRight />
              </Wrapper>
            </NavLink>
          );
        })}
    </Wrapper>
  );
}

export default MyPlans;
