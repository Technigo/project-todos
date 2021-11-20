import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "../reducers/tasks";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => dispatch(tasks.actions.changeFilter("all"))}>
          all
        </Button>
        <Button onClick={() => dispatch(tasks.actions.changeFilter("to do"))}>
          to do
        </Button>
        <Button onClick={() => dispatch(tasks.actions.changeFilter("done"))}>
          done
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Filter;

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 70%;
  }
`;

const Button = styled.button`
  color: #2f8c85;
  font-size: 14px;
  background-color: #d7f0ed;
  border: 2px solid #2f8c85;

  &:hover,
  &:focus {
    color: #d7f0ed;
    background-color: #2f8c85;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 22px;
    padding: 5px 15px;
    margin-bottom: 20px;
  }
`;
