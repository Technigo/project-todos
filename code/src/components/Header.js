import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { todos } from "../reducers/todos";
import { ClearAllButton } from "./ClearAllButton";

export const Header = () => {
  const items = useSelector(store => store.todos.items);

  const dispatch = useDispatch();

  const [isAllComplete, setIsAllComplete] = useState(false);

  const handleAllComplete = () => {
    dispatch(todos.actions.setAllComplete());
    setIsAllComplete(true);
  };

  const handleAllIncomplete = () => {
    dispatch(todos.actions.setAllIncomplete());
    setIsAllComplete(false);
  };

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
        <CompleteButton
          type="button"
          onClick={
            !isAllComplete
              ? () => handleAllComplete()
              : () => handleAllIncomplete()
          }
        >
          {!isAllComplete ? "Mark All Complete" : "Mark All Incomplete"}
        </CompleteButton>
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

const CompleteButton = styled.button`
  align-self: center;
  height: 30px;
  width: 95%;
  font-size: 20px;
  background: ${props => props.background || "#0099ff"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #4dbfed;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 150px;
    height: 50px;
  }
`;

const DateText = styled.h2`
  color: #474747;
  font-weight: 600;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const HeadingParagraph = styled.p`
  color: #0099ff;
  font-weight: 600;
  margin: 5px 0;

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
    padding: 0 0 0 10px;
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
