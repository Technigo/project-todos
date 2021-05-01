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
        {deadline === "3030-30-30" ? "No deadline" : `Deadline: ${deadline}`}
      </DeadlineText>
    );
  };
  return (
    <Wrapper>
      <TextContainer>
          {checkStatus()}
        <DeadlineCountdown 
          deadline={deadline} 
          isComplete={isComplete}/>
      </TextContainer>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(todos.actions.removeTodo({ task: id }))}
        ><Image src={require("../../../Assets/delete.svg")}/></Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
background: #e9e2d0;
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DeadlineText = styled.p`
  padding-right: 10px;
  margin: 5px;
  color: #6e5773;
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
filter: invert(39%) sepia(19%) saturate(559%) hue-rotate(243deg) brightness(89%) contrast(92%);

&:hover > img,
&:focus > img,
&:active > img {
  filter: invert(50%) sepia(80%) saturate(1400%) hue-rotate(210deg) brightness(60%) contrast(80%);
}`

const Image = styled.img`
object-fit:cover;
width:100%;
`
