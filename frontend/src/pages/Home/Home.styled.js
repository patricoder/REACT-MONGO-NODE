import styled from "styled-components";
import SectionContainer from "../../theme/SectionContainer";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Container = styled(SectionContainer)``;

//HEADER
export const Header = styled.div`
  position: relative;
  background-color: #18181c;
  border: 2px solid #222126;
  padding: 1.5rem 0;
  z-index: 1;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Row = styled.div`
  &.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.navmenu {
    display: flex;
    flex-direction: column;
  }
`;

export const Span = styled.div``;

export const Hamburger = styled.div`
  display: none;
  width: 35px;
  height: 26px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  ${Span} {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0;
      &.open {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    }
    &:nth-child(2) {
      top: 50%;
      &.open {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
    &:nth-child(3) {
      top: 50%;
      &.open {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
    &:nth-child(4) {
      top: 100%;
      &.open {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    }
  }
`;

export const Image = styled.img`
  max-width: 9rem;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 17px;
  color: #bebdc2;
`;

export const Heading = styled.p`
  font-weight: bold;
  color: #e3e2e4;
  font-size: 2.3rem;
  margin-bottom: 2rem;
`;

//MAIN

export const LeftCol = styled.div`
  padding: 3rem 2rem 3rem;
  background-color: #1b1a1f;
  border-right: 2px solid #222126;
  height: 100%;
  min-width: 32rem;
  ${Text} {
    font-weight: 600;
    text-transform: uppercase;
    padding: 1.5rem 0;
    position: relative;
    padding-left: 4rem;
    &::after {
      position: absolute;
      content: "";
      width: 2px;
      height: 100%;
      background-color: #212025;
      left: 0;
      top: 0;
    }
  }
  //active nav link
  .active {
    ${Text} {
      z-index: 1;
      &::after {
        background-color: #2e6957;
      }
      &::before {
        border-radius: 1rem;
        z-index: -1;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #222124;
        left: -10px;
        top: 0;
      }
    }
  }
`;
export const RightCol = styled.div`
  background-color: #18181c;
  color: white !important;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  /* grid-template-columns: 30% 70%;
  height: 100%; */
  height: 100%;
  ${Text} {
    color: #656469;
  }
  ${(LeftCol, RightCol)} {
    padding: 3rem 2rem 0;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    ${LeftCol} {
      width: 100%;
      height: unset;
      ${Row}.navbar {
      }
      ${Row}.navmenu {
        display: none;
        padding-top: 1rem;
      }
      ${Row}.navmenu.open {
        display: flex;
      }
    }
    ${RightCol} {
      height: 100%;
    }
    ${Heading} {
      margin-bottom: 0;
    }
    ${Hamburger} {
      display: block;
    }
  }
`;
