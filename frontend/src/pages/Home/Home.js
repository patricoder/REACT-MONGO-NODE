import React, { useState } from "react";
import { NavLink as Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
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
  Row,
  Hamburger,
  Span,
} from "./Home.styled";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const Home = () => {
  const [open, setOpen] = useState(false);
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
          <Row className="navbar">
            <Heading>Kategorie</Heading>
            <Hamburger onClick={() => setOpen(!open)}>
              <Span className={open && "open"} />
              <Span className={open && "open"} />
              <Span className={open && "open"} />
              <Span className={open && "open"} />
            </Hamburger>
          </Row>
          <Row className={open ? "navmenu open" : "navmenu"}>
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
          </Row>
        </LeftCol>
        <RightCol>
          <Outlet />
          <NotificationContainer />
        </RightCol>
      </Main>
    </Wrapper>
  );
};

export default Home;
