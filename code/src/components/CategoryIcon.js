import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWavePulse,
  faBusinessTime,
  faFamily,
} from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";

export const CategoryIcon = ({ category, completed = false, canClick, id }) => {
  const dispatch = useDispatch();

  return (
    <IconContainerWrapper>
      {!completed && (
        <IconContainerNotCompleted
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
          onClick={() => {
            if (canClick) {
              dispatch(todo.actions.setIsCompleted({ id }));
            }
          }}
        >
          {category === "activity" && <FontAwesomeIcon icon={faWavePulse} />}
          {category === "business" && <FontAwesomeIcon icon={faBusinessTime} />}
          {category === "family" && <FontAwesomeIcon icon={faFamily} />}
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
  border: 1px solid #d2d3db;
  border-radius: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
`;

const IconContainerCompleted = styled(IconContainerNotCompleted)`
  background-color: green;
`;
