import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import todo from 'reducers/todo';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import 'Checkbox.css';

const TodoListWrapper = styled.section`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TodoItem = styled.div`
  background-color: rgb(219, 233, 255);
  border-radius: 10px;
  padding: 5px;
  margin: 0px 10px 15px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 768px) {
  }
  @media (min-width: 1025px) {
    width: 40vw;
  }
`;

const TodoText = styled.p`
  padding-left: 50px;
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;
const TodoTime = styled.p`
  padding-left: 50px;
  margin: 10px;
  font-size: 14px;
`;

const Counter = styled.p`
  text-align: center;
  font-weight: 700;
`;

const DeleteIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  transition: transform 0.2s;
  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.15);
    }
  }
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  top: 40%;
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
    <TodoListWrapper>
      <Counter>
        {completedTasks.length} / {allTasks.length}
      </Counter>
      {all &&
        allTasks.map((task) => {
          return (
            <TodoItem>
              <TodoText completed={task.completed}>{task.text}</TodoText>
              <TodoTime>{moment(task.createdAt).fromNow()}</TodoTime>
              <CheckboxWrapper>
                <label class='container'>
                  <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => onTodoToggle(task.id)}
                  />
                  <div class='checkmark'></div>
                </label>
              </CheckboxWrapper>
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
              <TodoText completed={task.completed}>{task.text}</TodoText>
              <TodoTime>{moment(task.createdAt).fromNow()}</TodoTime>
              <CheckboxWrapper>
                <label class='container'>
                  <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => onTodoToggle(task.id)}
                  />
                  <div class='checkmark'></div>
                </label>
              </CheckboxWrapper>
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
              <TodoText completed={task.completed}>{task.text}</TodoText>
              <TodoTime>{moment(task.createdAt).fromNow()}</TodoTime>
              <CheckboxWrapper>
                <label class='container'>
                  <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => onTodoToggle(task.id)}
                  />
                  <div class='checkmark'></div>
                </label>
              </CheckboxWrapper>
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
    </TodoListWrapper>
  );
};

export default TodoList;
