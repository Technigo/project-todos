import React from "react";
import {useDispatch} from 'react-redux'
import styled from "styled-components";

import { todos } from "../../../Reducers/todos";
import { DeadlineCountdown } from "./DeadlineCountdown";

export const TaskFooter = ({ deadline, id, isComplete, completedAt }) => {
  const dispatch=useDispatch()
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
          {checkStatus()}
        <DeadlineCountdown deadline={deadline} isComplete={isComplete}/>
      </TextContainer>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(todos.actions.removeTodo({ task: id }))}
        ><Image src={require("../../../Assets/delete.svg")}/></Button>
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

const Button = styled.button`
background: transparent;
border:none;
width: 30px;
filter: invert(85%) sepia(11%) saturate(580%) hue-rotate(120deg) brightness(95%) contrast(88%);

&:hover > img,
&:focus > img,
&:active > img {
  filter: invert(50%) sepia(80%) saturate(1400%) hue-rotate(210deg) brightness(60%) contrast(80%);
}`

const Image = styled.img`
object-fit:cover;
width:100%;
`
