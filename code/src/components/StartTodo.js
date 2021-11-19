import React from "react";
import styled from "styled-components";

const StartContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #8fbfd78f;

  @media (min-width: 768px) {
    margin-right: 80px;
    margin-left: 80px;
    height: 300px;
  }

  @media (min-width: 1366px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

const StartTodo = () => {
  return (
    <StartContainer>
      <h1>What's on your todo today?</h1>
    </StartContainer>
  );
};

export default StartTodo;
