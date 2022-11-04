/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import AddTask from 'components/AddTask';
import styled from 'styled-components';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todo.items);

  const onIsCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id));
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  // deletes all tasks from list
  const deleteAllTodos = () => {
    dispatch(todo.actions.deleteAllTodos())
  }

  return (
    <TaskList>
      <TaskSection>
        <AddTask />
        {todoList.map((singleTask) => {
          return (
            <TaskArticle key={singleTask.id}>
              <label className="container">
                <input type="checkbox" checked={singleTask.isCompleted} onChange={() => onIsCompletedToggle(singleTask.id)} />
                <span className="checkmark" />
              </label>
              <TaskText>
                <p>{singleTask.task}</p>
              </TaskText>
              <CheckAndDeleteWrapper>
                <DeleteButton type="button" onClick={() => onDeleteTodo(singleTask.id)}>X</DeleteButton>
              </CheckAndDeleteWrapper>
            </TaskArticle>
          );
        })}
      </TaskSection>
      <DeleteAllButton onClick={deleteAllTodos}>Delete all tasks</DeleteAllButton>
    </TaskList>
  )
}
export default TodoList;

const TaskList = styled.div`
  background-color: #e5f2f5;
  padding: 30px;
  border-radius: 5px;
  `

const TaskSection = styled.section`
@media (min-width: 668px){ 
 margin: 20px;
} 

@media (min-width: 1025px) {
  margin: 20px; 
}
  `

const TaskArticle = styled.article`
    background-color: #ffff;
    margin: 20px;
    border: 2px solid #007E9F;
    border-radius: 5px;
    padding: 0 10px;
    display: flex;
  `

const DeleteButton = styled.button`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: none;
    color: red;
    font-weight: bold;
    font-size: 14px;
    padding: 0;

    &:hover {
      background-color: #ccc;
    }
  `
const CheckAndDeleteWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`
const TaskText = styled.div`
  width: 75%;
`
const DeleteAllButton = styled.button`
border: none;
font-size: 12px;
float: right;
text-decoration: underline;
cursor: pointer;
background-color: #e5f2f5;

&:hover {
  font-size: 14px;
  color: rgba(0,126,159,1)
}
`