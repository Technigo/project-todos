/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import AddTask from 'components/AddTask';
import styled from 'styled-components'

const TaskList = styled.div`
  background-color: #e5f2f5;
  padding: 20px;
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
    padding: 10px;
    display: flex;
  `

const DeleteButton = styled.button`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
  `
const CheckAndDeleteWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`
const TaskText = styled.div`
  width: 75%;
`
const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todo.items);

  const onIsCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id));
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  return (
    <TaskList>
      <TaskSection>
        <AddTask />
        {todoList.map((singleTask) => {
          return (
            <TaskArticle key={singleTask.id}>
              <TaskText>
                <p>{singleTask.task}</p>
              </TaskText>
              <CheckAndDeleteWrapper>
                <label className="container">
                  <input type="checkbox" checked={singleTask.isCompleted} onChange={() => onIsCompletedToggle(singleTask.id)} />
                  <span className="checkmark" />
                </label>
                <DeleteButton type="button" onClick={() => onDeleteTodo(singleTask.id)}>❌</DeleteButton>
              </CheckAndDeleteWrapper>
            </TaskArticle>
          );
        })}
      </TaskSection>
    </TaskList>
  )
}
export default TodoList;