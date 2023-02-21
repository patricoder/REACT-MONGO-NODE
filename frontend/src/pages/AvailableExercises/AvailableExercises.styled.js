import styled from "styled-components";
export const DeleteWorkout = styled.span`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #222126;
  padding: 1rem;
  font-size: 1.4rem;
  position: relative;
  overflow: hidden;
  &:nth-child(2n + 1) {
    background-color: #1d1c21;
    color: #807f84;
  }
  ${DeleteWorkout} {
    position: absolute;
    translate: 0 -50%;
    top: 50%;
    right: -5%;
    transition: all 0.2s;
    &::after,
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 0.3rem;
      background-color: #ff6961;
      translate: -50% -50%;
      left: 50%;
      top: 50%;
      border-radius: 3px;
      transition: all 0.6s;
    }
    &::after {
      /* rotate: 90deg; */
    }
    &::before {
      /* rotate: -45deg; */
    }
  }
  &:hover {
    ${DeleteWorkout} {
      right: 2%;
      &::after {
        rotate: 45deg;
      }
      &::before {
        rotate: -45deg;
      }
    }
  }
`;

export const Col = styled.div`
  text-transform: uppercase;
  display: flex;
  align-self: center;
`;

export const Wrapper = styled.div`
  ${Row}:first-of-type {
    background-color: #1a2b27;
    font-weight: bold;
    font-size: 1.7rem;
    color: #598b7a;
  }
`;
