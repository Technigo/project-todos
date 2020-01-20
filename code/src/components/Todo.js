import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'

export const Todo = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCompleted(props.todo.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.todo.id))
  }


  return (
    <ListWrapper>
      <ListItem>
        <Check
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleCheckboxClick} />
        <TaskText completed={props.todo.completed}>{props.todo.text}</TaskText>
      </ListItem>
      <ButtonRemove type="button" onClick={handleRemoveButtonClick}>
        <Emoji role="img" aria-label="add task"> ❌</Emoji>
      </ButtonRemove>
    </ListWrapper>
  )
}

const Emoji = styled.span`
font-size: large;
`
const ButtonRemove = styled.button`
background-color: transparent;
border: 0;
`

const Check = styled.input`
  width: 30px;
  height: 30px;
  font-size: large;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #5071f2;
  outline: none;
  margin: 0px 20px;
  opacity: 1
  &:checked {
    background-color: #5071f2;
    color: #fff;
    opacity: 0.6;
  }
`;

const TaskText = styled.p`
  text-decoration: ${props => (props.completed ? "line-through" : "")};
  display: inline-block;
  overflow: hidden;
  margin: 0px;
  `;

const ListWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

const ListItem = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0px;
  padding-left: 10px;
  margin-top: 6px;
  border-bottom-width: 1px;
  font-size: 17px;
  font-weight: 600;
  color: black;
  `

