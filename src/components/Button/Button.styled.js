import styled from "styled-components";

export const Btn = styled.button(
  ({ theme }) => `
  background-color: ${theme === "delete" ? "#ad3333" : "#1a2b27"};
  color: ${theme === "delete" ? "#ffffff" : "#598b7a;"};
  border: 2px solid ${theme === "delete" ? "#561d1d;" : "#1f3431"};
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.4rem;
  width: fit-content;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    opacity: .7;
  }
  `
);
// background-color: ;
//     color: #ffffff;
//     border: 3px solid #561d1d;
