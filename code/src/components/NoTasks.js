import React from "react";
import styled from "styled-components";

const NoTasks = () => {
  return (
    <NoTaskContainer>
      <Title>There are no tasks at the moment</Title>
      <Icon>
        <i class="fas fa-calendar-times fa-3x"></i>
      </Icon>
      <Text>
        Click on the <i className="fas fa-plus-circle "></i> to add a new one.
      </Text>
    </NoTaskContainer>
  );
};

export default NoTasks;

const NoTaskContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (min-width: 1025px) {
    width: 60%;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  color: #49586e;
  text-align: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 35px;
  }
`;

const Icon = styled.div`
  color: #49586e;
  display: flex;
  justify-content: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  color: #49586e;
  text-align: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 30px;
  }
`;
