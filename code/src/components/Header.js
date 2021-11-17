import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";
import moment from "moment";
import { HeaderContainer, HeaderMainTitle, HeaderBodyContainer, LeftContainer, HeaderSubTitle,RigthContainer, ButtonHeader } from "./StyledComponents";

const Header = () => {

  const dispatch = useDispatch()
  const onCompleteAll = () => {
    dispatch(todos.actions.completeAll())
  }
  const onDeleteAll = () => {
    dispatch(todos.actions.clear())
  }
  const tasks = useSelector((store) => store.todos.items)
  // const completedTasks = tasks.filter((singleTask) => singleTask.isComplete)
  
  return(
    <>
    <HeaderContainer>
      <HeaderMainTitle>Todo</HeaderMainTitle>
      <HeaderBodyContainer>
        <LeftContainer>
          <HeaderSubTitle>{moment().format('MMMM Do')}</HeaderSubTitle>
        </LeftContainer>
        <RigthContainer>
          <HeaderSubTitle>{tasks.length} tasks</HeaderSubTitle>
          <ButtonHeader onClick={onCompleteAll}>Complete All</ButtonHeader>
          <ButtonHeader onClick={onDeleteAll}>Clear All</ButtonHeader>
        </RigthContainer>
      </HeaderBodyContainer>
    </HeaderContainer>
    </>
  )
}

export default Header
