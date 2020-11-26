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

  //const todaysDate = useSelector(store => store.todos.todaysDate);
  const incompleteTasks = items.filter(item => item.isComplete === true).length;
  //var today = new Date();
  console.log("incompleteTasks" + incompleteTasks);
  return (
    <HeaderContainer>
      <Title>To Do List</Title>
      <DateText>{moment().format("ddd Do MMMM")}</DateText>
      <HeadingParagraph>
        Tasks Completed: {filteredisComplete}
        <br />
        Total Tasks: {items.length}
      </HeadingParagraph>
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
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  color: #474747;
  flex-direction: column;
  background: #fff;
  border: 1px solid #474747;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #010101;
`;

const CompleteButton = styled.button`
  align-self: center;
  height: 30px;
  width: 300px;
  font-size: 20px;
  background: ${props => props.background || "#0099ff"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #4dbfed;
  }
`;

const DateText = styled.span`
  color: #474747;
  font-weight: 600;
`;

const HeadingParagraph = styled.p`
  color: #0099ff;
  font-weight: 600;
  margin: 5px 0;
`;
