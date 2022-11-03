/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import AddTask from 'components/AddTask';
import styled from 'styled-components'

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todo.items);

  const onIsCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id));
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  const TaskList = styled.div`
  background-color: #e5f2f5;
  padding: 20px;
  `

  const TaskSection = styled.section`
    margin: 20px;
  `

  const TaskArticle = styled.article`
    background-color: #ffff;
    margin-bottom: 20px;
    border: 2px solid #007E9F;
    border-radius: 5px;
  `

  const DeleteButton = styled.button`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
  `

  return (
    <TaskList>
      <TaskSection>
        <AddTask />
        {todoList.map((singleTask) => {
          return (
            <TaskArticle key={singleTask.id}>
              <p>{singleTask.task}</p>
              <label>
                <input type="checkbox" checked={singleTask.isCompleted} onChange={() => onIsCompletedToggle(singleTask.id)} />
              </label>
              <DeleteButton type="button" onClick={() => onDeleteTodo(singleTask.id)}>❌</DeleteButton>
            </TaskArticle>
          );
        })}
      </TaskSection>
    </TaskList>
  )
}
export default TodoList;