import styled from "styled-components";
import SectionContainer from "../../theme/SectionContainer";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Container = styled(SectionContainer)``;

//HEADER
export const Header = styled.div`
  background-color: #18181c;
  border: 2px solid #222126;
  padding: 1.5rem 0;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  height: 100%;
  ${Text} {
    color: #656469;
  }
  ${(LeftCol, RightCol)} {
    padding: 3rem 2rem 0;
  }
`;
