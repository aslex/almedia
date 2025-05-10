import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  padding: 1rem;
`;

export const Button = styled.button`
  height: 3rem;
  min-width: "5rem";
  padding: 0.5rem;
  border-radius: 0.4rem;
  border-style: none;
  background-color: #ffffff80;
  font-weight: bold;
  &:hover {
    background-color: #ffffff95;
  }
`;
