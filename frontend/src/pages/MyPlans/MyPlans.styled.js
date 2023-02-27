import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  .myplan {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0.5rem 0.7rem;
    background-color: #252629;
    border-radius: 0.8rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Text = styled.p`
  color: white;
  &.myplan__details {
    font-size: 1.2rem;
    font-weight: 400;
    color: #dadada;
  }
  &.myplan__name {
    font-size: 1.6rem;
    font-weight: 600;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
export const Image = styled.img`
  max-width: 3rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  &.myplan__rightCol {
    justify-content: center;
  }
  .myplan__icon {
    color: white;
  }
`;
