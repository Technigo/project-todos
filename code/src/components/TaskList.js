/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { Button } from 'StyledComponents/globalStyles';
import { formatRelative } from 'date-fns';
import styled from 'styled-components';
import { ToDoDetails } from './AddTask';

const TaskList = () => {
  const taskslist = useSelector((state) => state.tasks.items)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch((tasks.actions.toggleItem(id)))
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
    <TaskListGrid>
      {taskslist.map((newTodo, ToDoIndex) => (
        <TaskListWrapper key={newTodo.id}>
          <Wrapper>
            <Input
              type="checkbox"
              checked={newTodo.isDone}
              onChange={() => handleToggleComplete(newTodo.id)}
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
    </TaskListGrid>
  )
}

export default TaskList;

const TaskListGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 30%;
@media (min-width: 600px) and (max-width: 900px){
  grid-template-columns: 50% 50%;
  margin: 30px 0 30%;
}
@media (min-width: 901px){
  grid-template-columns: 50% 50%;
  margin: 30px auto 30%;
  width: 90%;
}
`
const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
@media (min-width: 600px) and (max-width: 900px){
  width: 90%;
}
@media (min-width: 901px){
  width: 90%;
}
`

const Wrapper = styled.div`
  background-color: var(--quinary);
  margin: 20px 20px 0;
  padding: 20px 10px;
  box-shadow: 0px 10px 7px -6px rgba(64,29,2,0.43);
  p{
    margin-top: 10px;
  }
@media (min-width: 600px) and (max-width: 900px){
  width: 100%;
  margin: 0 ;
}
@media (min-width: 901px){
  padding: 50px 20px;
  margin: 0;
  label{
    font-size: 28px;
  }
}
`
const SubmittedToDoDetails = styled(ToDoDetails)`
  justify-content: flex-end;
  img{
    height: 35px;
    width: 35px;
  }
@media (min-width: 600px) and (max-width: 900px){
  justify-content: center;
  margin: 10px auto;
}
@media (min-width: 901px){
  justify-content: center;
  margin: 10px auto;
  
  img{
    height: 45px;
    width: 45px;
  }
}
`

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  margin: 0 5px 0 0;
  color: red;
  width: 15px;
  height: 15px;
  border: 1px solid var(--tertiary);
  transform: translateY(-4px);
   
  &::before{
    content: "";
    width: 13px;
    height: 13px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 30px 30px var(--secondary);
    display: grid;
    place-content: center;
  }
  &:checked + label{
    text-decoration: 4px line-through var(--primary);
  }
  
  &:checked::before{
    transform:scale(1)
  }
`;