import styled from "styled-components";

export const Btn = styled.button`
  background-color: #1a2b27;
  color: #598b7a;
  border: 3px solid #1f3431;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.4rem;
  width: fit-content;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background-color: #598b7a;
    color: #1a2b27;
  }
`;
