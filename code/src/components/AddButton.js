import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";
import { todo } from "reducers/todo";
import { useDispatch } from "react-redux";

export const AddButton = () => {
  const dispatch = useDispatch();
  return (
    <AddButtonContainer>
      <AddButtonCircle
        onClick={() => {
          dispatch(todo.actions.currentScreen({ screen: "newTodo" }));
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </AddButtonCircle>
    </AddButtonContainer>
  );
};

const AddButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 0;
`;

const AddButtonCircle = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d98a60;
  border-radius: 50%;
  border: lightgrey 1px solid;
  margin: 20px;
  font-size: 30px;
`;
