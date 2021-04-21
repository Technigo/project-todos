import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CompletedContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 90px;
color: ${props => props.theme.primary};
margin-top: 100px;
`;

const CompletedText = styled.h1`
  text-align: center;
  font-size: 38px;
  font-family: ${props => props.theme.fontFamily};
`;

export const TasksCompleted = () => {
  return (
    <CompletedContainer>
      <FontAwesomeIcon icon="calendar-check" />
      <CompletedText>You have no tasks! So take some time and relax and do something fun!</CompletedText>
    </CompletedContainer>
  )
};