import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";
import { screen } from "reducers/screen";
import { useDispatch } from "react-redux";
import { mainColor } from "../style/colors";

export const AddButton = () => {
  const dispatch = useDispatch();
  return (
    <AddButtonCircle
      onClick={() => {
        // Dispatch a change in screen to the global state.
        dispatch(screen.actions.currentScreen({ screen: "newTodo" }));
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </AddButtonCircle>
  );
};

const AddButtonCircle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainColor};
  border-radius: 50%;
  border: lightgrey 1px solid;
  margin: 20px;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgba(217, 138, 96, 0.8);
    transition: all 200ms ease-in-out;
  }
`;
