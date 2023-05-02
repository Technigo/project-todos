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
text-align: center;
padding: 10px;
margin: 20px auto;
margin-bottom: 40px;
border-radius: 25px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

@media (min-width: 668px) {
  width: 55vw;
}
`

// const TodoItem = styled.article`
//   border-radius: 4px;
//   padding: 12px;
//   margin-bottom: 6px;
//   background: #86bbd8;
//   position: relative;
//   @media (min-width: 768px) {
//     width: 500px;
//   }
// `

const Button = styled.button`
font-size: 18px;
padding: 10px 18px;
margin-top: 15px;
// font-family: ;
background: #edca7f;
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

  const toggleTodo = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId))
  }

  const deleteTodo = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

  const completeAll = () => {
    todoList.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(todos.actions.toggleItem(todo.todoId));
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

      {tasksTodo.length === 0 && <p>You are all done!</p>}
      {tasksTodo.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.todoId} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
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