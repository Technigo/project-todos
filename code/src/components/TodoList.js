/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper } from './styling/GlobalStyling';

const TodoList = () => {
  const todoList = useSelector((store) => store.todo.items);
  const dispatch = useDispatch();

  const onIsCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id));
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  const TaskSection = styled.section`
    background-color: pink;
  `

  return (
    <OuterWrapper>
      <InnerWrapper>
        <TaskSection>
          {todoList.map((singleTask) => {
            return (
              <article>
                <h2>{singleTask.task}</h2>
                <label>Is task completed
                  <input type="checkbox" checked={singleTask.isCompleted} onChange={() => onIsCompletedToggle(singleTask.id)} />
                </label>
                <button type="button" onClick={() => onDeleteTodo(singleTask.id)}>🗑</button>
              </article>
            );
          })}
        </TaskSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default TodoList;