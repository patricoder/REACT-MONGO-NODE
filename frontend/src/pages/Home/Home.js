import React from "react";
import { NavLink as Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Container,
  Header,
  Wrapper,
  Image,
  Text,
  Main,
  LeftCol,
  RightCol,
  Heading,
} from "./Home.styled";

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <Image src={logo} />
          <Text>Witaj Patryk!</Text>
        </Container>
      </Header>
      <Main>
        <LeftCol>
          <Heading>Kategorie</Heading>
          <Link to="/show-excersises">
            <Text>Dostępne ćwiczenia</Text>
          </Link>
          <Link to="/create-plan">
            <Text>Stwórz plan</Text>
          </Link>
          <Link to="/my-plans">
            <Text>Moje plany treningowe</Text>
          </Link>
          <Link to="/add-workouts">
            <Text>Dodaj ćwiczenia</Text>
          </Link>
        </LeftCol>
        <RightCol>
          <Outlet />
        </RightCol>
      </Main>
    </Wrapper>
  );
};

export default Home;
