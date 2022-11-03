/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/task'
import { Button } from 'styledcomponents/GlobalStyles';
import { formatRelative } from 'date-fns';
import styled from 'styled-components';

const TaskList = () => {
  const listTasks = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  const onToDoToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  }

  const toggleLineThrough = (item) => {
    if (item.checked) {
      document.getElementById('task').style.textDecoration = 'line-through';
    } else {
      document.getElementById('task').style.textDecoration = 'none';
    }
  }
  return (
    <>
      {listTasks.map((newTodo, ToDoIndex) => (
        <TaskListWrapper key={newTodo.id}>
          <Wrapper>
            <Input
              type="checkbox"
              checked={newTodo.isDone}
              onChange={() => onToDoToggle(newTodo.id)}
              onClick={() => toggleLineThrough(this)} />
            <label
              htmlFor="a"
              id="task">
              {newTodo.name}
            </label>
            <p>{formatRelative(new Date(), new Date())}</p>
          </Wrapper>
          <SubmittedToDoDetails>
            <Button
              type="button"
              onClick={() => onToDoDelete(ToDoIndex)}>
              <img
                src="/assets/delete.png"
                alt="delete task" />
            </Button>
          </SubmittedToDoDetails>
        </TaskListWrapper>
      ))}
    </>
  )
}

export default TaskList

const TaskListWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const Wrapper = styled.div`
background-color:#F9E4D4;
width: 100%;
margin: 20px 0 5px;
padding: 20px;

p{
  margin-top: 10px;
}
`
export const SubmittedToDoDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 10px;
`

export const Checkbox = styled.div`
margin: 0;

/* input{
  margin-right: 5px;
  
  &:checked{
    height: 52px;
  } 
}*/
`
const Input = styled.input`
margin-right: 5px;
  &:checked + label{
    text-decoration: line-through;
  }
`;