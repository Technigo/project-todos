import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from "styled-components";


export const Header = () => {
  const user = useSelector(store => store.tasks.user)
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <TodoHeader>{user && `${user}'s`} Todo list</TodoHeader>
      <ChangeName className="change-name" onClick={() => {
        dispatch(
          tasks.actions.changeUser(prompt("Välj namn")))
      }}>[{user ? "+" : "Add user name"}]</ChangeName>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.section`
  display: flex;
  margin: 40px 0 30px 0;
`;

const TodoHeader = styled.h1`
  font-size: 28px;
  margin: 0;
`;

const ChangeName = styled.span`
  font-size: 12px;
  color: #bbb;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: black;
  }

`;