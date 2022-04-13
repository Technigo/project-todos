import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import todo from 'reducers/todo';
import moment from 'moment';

const TodoItem = styled.div`
  background-color: rgb(213, 219, 214);
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
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
      {completedTasks.length} / {allTasks.length}
      {todoList.map((todoTask) => (
        <TodoItem key={todoTask.id}>
          <p>{todoTask.text}</p>
          <p>{moment(todoTask.createdAt).fromNow()}</p>
          <label>
            Is done:
            <input
              type='checkbox'
              checked={todoTask.isDone}
              onChange={() => onTodoToggle(todoTask.id)}
            />
          </label>
          <button onClick={() => dispatch(todo.actions.deleteTask(todoTask))}>
            REMOVE
          </button>
        </TodoItem>
      ))}
    </section>
  );
};

export default TodoList;
