import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import todo from 'reducers/todo';
import moment from 'moment';

const TodoItem = styled.div`
  background-color: rgb(213, 219, 214);
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TodoText = styled.p`
  padding-left: 25px;
  margin: 0px;
`;

const CheckCompleted = styled.input``;

const Counter = styled.p`
  text-align: center;
`;

const TodoList = ({ all, completed, uncompleted }) => {
  const todoList = useSelector((store) => store.todo.items);
  const allTasks = useSelector((store) => store.todo.items);
  const completedTasks = allTasks.filter((todo) => todo.completed === true);
  const uncompletedTasks = allTasks.filter((todo) => todo.completed === false);

  const dispatch = useDispatch();

  const onTodoToggle = (todoId) => {
    dispatch(todo.actions.toggleItem(todoId));
  };

  return (
    <section>
      <Counter>
        {completedTasks.length} / {allTasks.length}
      </Counter>
      {all &&
        allTasks.map((task) => {
          return (
            <TodoItem>
              <TodoText>
                <p>{task.text}</p>
                <p>{moment(task.createdAt).fromNow()}</p>
              </TodoText>
              <label>
                <CheckCompleted
                  type='checkbox'
                  onChange={() => onTodoToggle(task.id)}
                />
              </label>
              <button onClick={() => dispatch(todo.actions.deleteTask(task))}>
                REMOVE
              </button>
            </TodoItem>
          );
        })}
      {completed &&
        completedTasks.map((task) => {
          return (
            <TodoItem>
              <TodoText>
                <p>{task.text}</p>
                <p>{moment(task.createdAt).fromNow()}</p>
              </TodoText>
              <label>
                <CheckCompleted
                  type='checkbox'
                  checked='true'
                  onChange={() => onTodoToggle(task.id)}
                />
              </label>
              <button onClick={() => dispatch(todo.actions.deleteTask(task))}>
                REMOVE
              </button>
            </TodoItem>
          );
        })}
      {uncompleted &&
        uncompletedTasks.map((task) => {
          return (
            <TodoItem>
              <TodoText>
                <p>{task.text}</p>
                <p>{moment(task.createdAt).fromNow()}</p>
              </TodoText>
              <label>
                <CheckCompleted
                  type='checkbox'
                  onChange={() => onTodoToggle(task.id)}
                />
              </label>
              <button onClick={() => dispatch(todo.actions.deleteTask(task))}>
                REMOVE
              </button>
            </TodoItem>
          );
        })}
    </section>
  );
};

export default TodoList;
