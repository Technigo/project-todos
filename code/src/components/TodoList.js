import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import todo from 'reducers/todo';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const TodoItem = styled.div`
  background-color: rgb(213, 219, 214);
  border-radius: 10px;
  padding: 5px;
  margin: 0px 10px 15px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TodoText = styled.p`
  padding-left: 25px;
  margin: 0px;
`;

const CheckCompleted = styled.input`
  position: absolute;
  left: 5;
`;

const Counter = styled.p`
  text-align: center;
`;

const DeleteIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
`;

const TodoList = ({ all, completed, uncompleted }) => {
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
                <div class='container'>
                  <div class='round'>
                    <CheckCompleted
                      type='checkbox'
                      onChange={() => onTodoToggle(task.id)}
                    />
                    <label for='checkbox'></label>
                  </div>
                </div>
              </label>
              <DeleteIcon>
                <FontAwesomeIcon
                  onClick={() => dispatch(todo.actions.deleteTask(task))}
                  icon={faCircleXmark}
                  size='2x'
                  color='rgb(50, 78, 168)'
                />
              </DeleteIcon>
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
              <DeleteIcon>
                <FontAwesomeIcon
                  onClick={() => dispatch(todo.actions.deleteTask(task))}
                  icon={faCircleXmark}
                  size='2x'
                  color='rgb(50, 78, 168)'
                />
              </DeleteIcon>
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
                  checked={task.isDone}
                  type='checkbox'
                  onChange={() => onTodoToggle(task.id)}
                />
              </label>
              <DeleteIcon>
                <FontAwesomeIcon
                  onClick={() => dispatch(todo.actions.deleteTask(task))}
                  icon={faCircleXmark}
                  size='2x'
                  color='rgb(50, 78, 168)'
                />
              </DeleteIcon>
            </TodoItem>
          );
        })}
    </section>
  );
};

export default TodoList;
