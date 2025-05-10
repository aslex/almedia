import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  margin: 5% auto;
  width: 50%;
  height: ${(props) => (props.theme.type === "task" ? "60vh" : "20vh")};
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 2rem;
  & > input textarea {
    padding: 1rem;
  }
  & > textarea {
    height: 70%;
  }
`;

export const Row = styled.div`
  display: flex;
`;
