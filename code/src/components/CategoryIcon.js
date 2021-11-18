import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWavePulse,
  faBusinessTime,
  faFamily,
  faCheck,
} from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";
import { grayColor, mainColor } from "./style/colors";

export const CategoryIcon = ({ category, completed = false, canClick, id }) => {
  const dispatch = useDispatch();

  return (
    <IconContainerWrapper>
      {/* Conditional rendering depending if the button should be clickable or not since i use the same icon component at two places. */}
      {!completed && (
        <IconContainerNotCompleted
          //Send in canClick as a prop so we can use it in the styled components.
          canClick={canClick}
          onClick={() => {
            if (canClick) {
              dispatch(todo.actions.setIsCompleted({ id }));
            }
          }}
        >
          {category === "activity" && <FontAwesomeIcon icon={faWavePulse} />}
          {category === "business" && <FontAwesomeIcon icon={faBusinessTime} />}
          {category === "family" && <FontAwesomeIcon icon={faFamily} />}
        </IconContainerNotCompleted>
      )}
      {completed && (
        <IconContainerCompleted
          canClick={canClick}
          onClick={() => {
            if (canClick) {
              dispatch(todo.actions.setIsCompleted({ id }));
            }
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </IconContainerCompleted>
      )}
    </IconContainerWrapper>
  );
};

const IconContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainerNotCompleted = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${grayColor};
  border-radius: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  // Check if canClick is true and add a cursor if so.
  // if CanClick is false I change the borders color.
  ${({ canClick }) => canClick && `cursor: pointer;`}
  ${({ canClick }) => !canClick && `border: 1px solid black;`}
  &:hover {
    background-color: rgba(217, 138, 96, 0.3);
    transition: all 200ms ease-in-out;
  }
`;

const IconContainerCompleted = styled(IconContainerNotCompleted)`
  background-color: ${mainColor};
`;
