import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { ClearAllButton } from "./ClearAllButton";
import { AllCompleteButton } from "./AllCompleteButton";

export const Header = () => {
  const items = useSelector(store => store.todos.items);

  const filteredisComplete = items.filter(item => item.isComplete).length;

  return (
    <HeaderContainer>
      <TextWrapper>
        <Title>My To-Do List</Title>
        <DateText>{moment().format("ddd Do MMMM")}</DateText>
        <HeadingParagraph>
          Tasks Completed: {filteredisComplete}/{items.length}
        </HeadingParagraph>
      </TextWrapper>
      <ButtonWrapper>
        <ClearAllButton />
        <AllCompleteButton />
      </ButtonWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  color: #474747;
  flex-direction: column;
  background: #fff;
  width: 100%;
  margin-bottom: 4px;
  border-bottom: 1px solid #474747;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 220px;
    margin-bottom: 15px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  color: #010101;
`;

const DateText = styled.h2`
  color: #474747;
  font-weight: 600;
  margin: 3px 0;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const HeadingParagraph = styled.p`
  color: #0099ff;
  font-weight: 600;
  margin: 2px 0;

  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media (min-width: 1024px) {
    width: 50%;
    margin-left: 20px;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    margin-bottom: 0;
  }
`;
