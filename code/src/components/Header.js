import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from "styled-components";


export const Header = () => {
  const user = useSelector(store => store.tasks.user)
  const dispatch = useDispatch()

  return (
    <header>
      <TodoHeader>{user && `${user}'s`} Todo list</TodoHeader>
      <ChangeName className="change-name" onClick={() => {
        dispatch(
          tasks.actions.changeUser(prompt("Välj namn")))
      }}>[{user ? "Change" : "Add"} user name]</ChangeName>
    </header>
  )
}

const TodoHeader = styled.h1`
`;

const ChangeName = styled.a`
display: block;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

`;