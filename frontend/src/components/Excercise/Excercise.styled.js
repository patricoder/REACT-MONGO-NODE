import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Div = styled.div`
  &.row {
    padding: 0.5rem 0.7rem;
    background-color: #252629;
    border-radius: 0.8rem;
  }
  &.row__workoutName {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
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

export const Text = styled.div`
  &.workout__name {
    font-size: 1.6rem;
    font-weight: 600;
  }
  &.workout__details {
    font-size: 1.2rem;
    font-weight: 400;
    color: #dadada;
  }
  &.table__heading {
    font-size: 1.4rem;
    font-weight: bold;
    /* border-left: 0.5px solid black;
    border-right: 0.5px solid black; */
    text-align: center;
    padding: 1rem;
  }
  &.table__content {
    font-size: 1.3rem;
    text-align: center;
    padding: 0.5rem;
  }
  &.table__edit {
    font-size: 1.4rem;
    color: #598b7a;
    font-weight: 600;
  }
`;
