import styled from "styled-components";

export const Wrapper = styled.div`
  &.myplan {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    &:hover {
        opacity: .8;
    }
  }
`;
export const Text = styled.p`
  color: white;
`;
export const Image = styled.img`
  max-width: 3rem;
`;
