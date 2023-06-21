/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from 'reducers/list'
import AddTodo from './AddToDo';
import TodoItem from './ToDoItem';

const TodoContainer = styled.div`
background-color: rgba(20, 20, 20, 0.5);
color: #b6c8a9;
width: 80vw;
height: auto;
align-item: center;
text-align: center;
padding: 10px;
margin: 50px auto;
margin-bottom: 40px;
border-radius: 25px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

h3 {
  color: white;
  font-size: 14px;
}

@media (min-width: 668px) {
  width: 55vw;
}
`

const Button = styled.button`
font-size: 18px;
padding: 10px 18px;
margin-top: 15px;
background-color: #edca7f;
color: #fff;
border: none;
border-radius: 40px 0px 40px 0px;
cursor: pointer;

:hover {
  color: #353a47;
}
`

const ToDo = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((store) => store.todos.items)

  const toggleTodo = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const deleteTodo = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

  const completeAll = () => {
    todoList.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(todos.actions.toggleItem(todo.id));
      }
    });
  };

  const tasksTodo = todoList.filter((todo) => !todo.isDone);
  const doneTasks = todoList.filter((todo) => todo.isDone);

  return (
    <TodoContainer>
      <h2>
      You have {tasksTodo.length} {tasksTodo.length === 1 ? 'thing' : 'things'} to do today.
      </h2>
      <h3>(Click on a task to mark it as completed)</h3>

      {tasksTodo.length === 0 && <p>You are all done!</p>}
      {tasksTodo.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
      <AddTodo />
      <Button type="button" onClick={completeAll}>
          Complete all tasks
      </Button>
      <h2>
          You have completed {doneTasks.length} {doneTasks.length === 1 ? 'task' : 'tasks'}
      </h2>
      {doneTasks.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </TodoContainer>
  );
};

export default ToDo;