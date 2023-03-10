import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  margin: 0 2.2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Image = styled.img`
  max-width: 7rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const Container = styled.div`
  background-color: white;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  .text-small {
    font-size: 1.3rem;
    text-align: center;
    padding: 0;
    margin: 0%;
    color: #666;
  }
  .text-link {
    color: #598b7a;
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Text = styled.p``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  .button {
    margin: 0 auto;
  }
`;

export const Label = styled.form`
  ${Text} {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 0.3rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  font-size: 1.3rem;
  color: #aaa;
  padding: 0.5rem;
`;
