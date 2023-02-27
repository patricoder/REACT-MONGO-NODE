import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.p`
  color: white;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 65rem;
  .form__button {
    margin: 0 auto;
    width: 100%;
    max-width: 20rem;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Error = styled.p`
  font-size: 1.3rem;
  color: red;
  margin-top: 1.2rem;
  font-weight: 500;
  &.error__info {
    color: #ffe000;
    font-weight: 100;
    font-size: .8rem;
  }
`;

export const Input = styled.input`
  background-color: #1d1c21;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: none;
  color: #d3d2d5;
  font-size: 1.4rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  color: #807f84;
  margin-bottom: 0.5rem;
  display: inline-block;
  &.workout__name {
    font-size: 1.6rem;
    font-weight: 600;
  }
  &.excercise__details {
    font-size: 1.2rem;
    font-weight: 400;
    color: #dadada;
  }
`;

export const Select = styled.select`
  background-color: #1d1c21;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: none;
  color: #d3d2d5;
  font-size: 1.4rem;
`;
export const Option = styled.option``;

export const RedText = styled.span`
  color: red;
`;

export const WorkoutsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 1rem;
`;

export const Row = styled.div`
  &.row {
    padding: 0.5rem 0.7rem;
    background-color: #252629;
    border-radius: 0.8rem;
  }
  &.row__excerciseName {
    display: flex;
    justify-content: space-between;
  }
  .excercise__delete {
    cursor: pointer;
    color: #af4949;
    font-size: 1.5rem;
  }
`;

export const Col = styled.div`
  &.col__excerciseDetails {
    display: flex;
    flex-direction: column;
  }
  &.col__excerciseDelete {
    display: flex;
    align-items: center;
  }
`;

export const WorkoutsTable = styled.div``;

//  display: grid;
// grid-template-columns: repeat(3, 1fr);
// border: 1px solid #222126;
// padding: 1rem;
// font-size: 1.4rem;
// position: relative;
// overflow: hidden;
// &:nth-child(2n + 1) {
//   background-color: #1d1c21;
//   color: #807f84;
// }

// ${DeleteExcercise} {
//   position: absolute;
//   translate: 0 -50%;
//   top: 50%;
//   right: -5%;
//   transition: all 0.2s;
//   &::after,
//   &::before {
//     position: absolute;
//     content: "";
//     width: 100%;
//     height: 0.3rem;
//     background-color: #ff6961;
//     translate: -50% -50%;
//     left: 50%;
//     top: 50%;
//     border-radius: 3px;
//     transition: all 0.6s;
//   }
//   &::after {
//     /* rotate: 90deg; */
//   }
//   &::before {
//     /* rotate: -45deg; */
//   }
// }
// &:hover {
//   ${DeleteExcercise} {
//     right: 2%;
//     &::after {
//       rotate: 45deg;
//     }
//     &::before {
//       rotate: -45deg;
//     }
//   }
// }

export const Div = styled.div`
  &.table__excercises {
    padding: 0;
    margin-top: 1rem;
    border-radius: 0.8rem 1rem;
    overflow: hidden;
    .table__editIcon {
      color: #598b7a;
    }
  }
  &.row__left {
    display: flex;
    flex-direction: column;
  }
  &.row__right {
    display: flex;
    align-items: center;
  }
  &.table__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #222126;
    &:first-of-type {
      background-color: #1a2b27 !important;
      font-weight: bold;
      font-size: 1.7rem;
      color: #598b7a;
    }
    &:nth-child(2n + 1) {
      background-color: #18181c;
    }
  }
  &.table__edit {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
  }
`;
