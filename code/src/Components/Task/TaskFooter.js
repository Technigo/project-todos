import React from "react";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";
import { RoundedButton } from "../Selects/RoundedButton";
import { DeadlineCountdown } from "./DeadlineCountdown";

export const TaskFooter = ({ deadline, id, isComplete, completedAt }) => {
  const checkStatus = () => {
    if (isComplete) {
      return <DeadlineText>Completed: {completedAt}</DeadlineText>;
    }
    return (
      <DeadlineText>
        {deadline === "" ? "No deadline" : `Deadline: ${deadline}`}
      </DeadlineText>
    );
  };
  return (
    <>
      <TextContainer>
        <DeadlineText>
          {checkStatus()}
        </DeadlineText>
        <DeadlineCountdown deadline={deadline} isComplete={isComplete}/>
      </TextContainer>
      <ButtonContainer>
        <RoundedButton
          buttonText="X"
          action={todos.actions.removeTodo({ task: id })}
        />
      </ButtonContainer>
    </>
  );
};

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DeadlineText = styled.p`
  padding-right: 10px;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5px;
`;
