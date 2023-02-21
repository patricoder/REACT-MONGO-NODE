import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.p`
  padding: 1rem 0;
`;

export const ExcerciseWrapper = styled.div`
  background-color: #222124;
  margin-bottom: 5px;
  padding: 1rem;
  .exc-edit {
    color: #598b7a;
    cursor: pointer;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #656469;
  font-size: 1.5rem;
  &.exc-name {
    color: white;
    margin-bottom: 0.5rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const Row = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   border: 1px solid #222126;
//   padding: 1rem;
//   font-size: 1.4rem;
//   position: relative;
//   overflow: hidden;
//   &:nth-child(2n + 1) {
//     background-color: #1d1c21;
//     color: #807f84;
//   }
// `;

// export const WorkoutsTable = styled.div`
//   ${Row}:first-of-type {
//     background-color: #1a2b27;
//     font-weight: bold;
//     font-size: 1.7rem;
//     color: #598b7a;
//   }
// `;

// export const Col = styled.div`
//   text-transform: uppercase;
//   display: flex;
//   align-self: center;
// `;
