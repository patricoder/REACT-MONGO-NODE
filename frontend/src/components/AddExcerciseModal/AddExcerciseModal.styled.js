import styled from "styled-components";
import { SectionTitle } from "../../theme/Title";

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: fixed;
  background-color: #222126;
  color: black;
  width: 90%;
  min-height: 30rem;
  translate: -50% 0;
  top: 20%;
  left: 50%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  .modal__icon {
    margin-left: auto;
    color: white;
    cursor: pointer;
  }
  .modal__button {
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Error = styled.p`
  font-size: 1.3rem;
  color: red;
  margin-top: 1.2rem;
  font-weight: 500;
`;

export const Input = styled.input`
  background-color: #1d1c21;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: none;
  color: #d3d2d5;
  font-size: 1.4rem;
  width: 100%;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  color: #807f84;
  margin-bottom: 0.5rem;
  display: inline-block;
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

export const Row = styled.div`
  &.modal__addSerie {
    display: flex;
    gap: 1rem;
  }
`;

export const Title = styled(SectionTitle)``;
