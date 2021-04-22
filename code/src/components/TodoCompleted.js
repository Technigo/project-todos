import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CompletedContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: ${props => props.theme.secondary};
  margin-top: 30px;
  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

const CompletedCard = styled(CompletedContainer)`
  background-color: #F4F4F4;
    width: 90%;
  padding: 50px;
  margin: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (min-width: 768px) {
    padding: 100px 50px;
  }
`;

const CompletedText = styled.h1`
  text-align: center;
  font-size: 24px;
  color: black;
  margin-top: 30px;
`;

export const TodoCompleted = () => {
  return (
    <CompletedContainer>
      <CompletedCard>
        <FontAwesomeIcon icon="check-circle" />
        <CompletedText>No tasks found! So take some time and relax or add new tasks below.</CompletedText>
      </CompletedCard>  
    </CompletedContainer>
  )
};