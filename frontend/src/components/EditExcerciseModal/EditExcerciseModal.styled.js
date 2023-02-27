import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  position: absolute;
  z-index: 1;
  background-color: #222126;
  color: black;
  width: 90%;
  translate: -50% 0;
  top: 5%;
  left: 50%;
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Title = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 2px solid #222126;
  padding-bottom: 0.4rem;
  color: white;
`;
