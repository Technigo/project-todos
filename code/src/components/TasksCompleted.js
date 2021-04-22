import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CompletedContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 90px;
color: ${props => props.theme.secondary};
margin-top: 50px;
`;

const CompletedCard = styled.div`
background-color: #F4F4F4;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
@media (min-width: 769px) {
  padding: 100px 50px;
}
`;

const CompletedText = styled.h1`
  text-align: center;
  font-size: 30px;
  color: black;
  margin-top: 30px;
  font-family: ${props => props.theme.fontFamily};
`;

export const TasksCompleted = () => {
  return (
    <CompletedContainer>
      <CompletedCard>
        <FontAwesomeIcon icon="check-circle" />
        <CompletedText>No tasks found! So take some time and relax and do something fun!</CompletedText>
      </CompletedCard>  
    </CompletedContainer>
  )
};