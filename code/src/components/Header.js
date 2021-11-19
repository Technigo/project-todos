import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";
import moment from "moment";
import { 
  HeaderContainer, 
  HeaderMainTitle, 
  HeaderBodyContainer, 
  LeftContainer, 
  HeaderSubTitle,
  RigthContainer, 
  ButtonHeader,
  MainSection } from "./StyledComponents";

const Header = () => {

  const dispatch = useDispatch()
  const onCompleteAll = () => {
    dispatch(todos.actions.completeAll())
  }
  const onDeleteAll = () => {
    dispatch(todos.actions.clear())
  }
  const tasks = useSelector((store) => store.todos.items)
  const completedTasks = tasks.filter((singleTask) => singleTask.isComplete)
  
  return(
    <MainSection>
    <HeaderContainer>
      <HeaderMainTitle>&#x2611; Todo-App</HeaderMainTitle>
      <HeaderBodyContainer>
        <LeftContainer>
          <HeaderSubTitle>{moment().format('MMMM Do')}</HeaderSubTitle>
        </LeftContainer>
        <RigthContainer>
          <HeaderSubTitle>{completedTasks.length}/{tasks.length} todos completed</HeaderSubTitle>
          <ButtonHeader onClick={onCompleteAll}>Complete All</ButtonHeader>
          <ButtonHeader onClick={onDeleteAll}>Clear All</ButtonHeader>
        </RigthContainer>
      </HeaderBodyContainer>
    </HeaderContainer>
    </MainSection>
  )
}

export default Header
