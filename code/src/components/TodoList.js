/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todo';
import { toWords } from 'number-to-words';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';
import { Wrapper, Button } from './GlobalStyle';

export const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((store) => store.todos.items);

  const onDone = (id) => {
    dispatch(todos.actions.toggleItem(id));
  };

  const onDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
  };

  const onCompleteAll = () => {
    allTodos.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(todos.actions.toggleItem(todo.id));
      }
    });
  };

  const onClearAll = () => {
    if (window.confirm('Are you sure you want to delete all tasks, including unfinished ones?')) {
      dispatch(todos.actions.clearAll());
    }
  };

  const todosTodo = allTodos.filter((todo) => !todo.isDone);
  const doneTodos = allTodos.filter((todo) => todo.isDone);

  return (
    <Wrapper key="wrapper">
      <h2>
        You have {toWords(todosTodo.length)} {todosTodo.length === 1 ? 'thing' : 'things'} to do
        today
      </h2>

      {todosTodo.length === 0 && <p>You are all done! ⭐</p>}

      {todosTodo.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
      ))}

      <AddTodo />

      <h2>
        You have finishied {toWords(doneTodos.length)} {doneTodos.length === 1 ? 'task' : 'tasks'}
      </h2>

      <Button type="button" onClick={onCompleteAll}>
        Complete all
      </Button>

      <Button type="button" onClick={onClearAll}>
        Clear all
      </Button>

      {doneTodos.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
      ))}
    </Wrapper>
  );
};
