/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'redux/reducers/todos';
import { AddToDo } from 'components/addtodo/AddToDo';
// import { ToDoItem } from './ToDoItem';
import { ToDoItem } from 'components/todoitem/ToDoItem';
import { Wrapper } from 'styles/GlobalStyle';
import { DefaultButton } from 'styles/Button';
import { ButtonContainer } from './ToDoList.style';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((store) => store.todos.items);
  // onDone calls the redux-reducer called toggleItem which toggles the items status
  const onDone = (todoIndex) => {
    dispatch(todos.actions.toggleItem(todoIndex));
  };

  const onDelete = (todoIndex) => {
    dispatch(todos.actions.deleteItem(todoIndex));
  };

  const onCompleteAll = () => {
    allTodos.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(todos.actions.toggleItem(todo.id));
      }
    });
  };

  const onClearAll = () => {
    if (window.confirm('Do you really want to delete all to-dos?')) {
      dispatch(todos.actions.clearAll());
    }
  };

  const todosTodo = allTodos.filter((todo) => !todo.isDone);
  const doneTodos = allTodos.filter((todo) => todo.isDone);

  return (
    <Wrapper>
      <section>
        {/* <ul>
        {allTodos.map((singleToDo) => {
          return <li key={singleToDo.id}>{singleToDo.name}</li>
        })}
      </ul> */}
        <h2>To-do ({todosTodo.length})</h2>

        <AddToDo />

        {todosTodo.length === 0 && <p>All done - great job! ✨</p>}

        {todosTodo.map((todo, index) => (
          <ToDoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
        ))}

        <h2>Done ({doneTodos.length})</h2>
        <ButtonContainer>
          <DefaultButton type="button" onClick={onCompleteAll}>
        Complete all to-dos
          </DefaultButton>

          <DefaultButton type="button" onClick={onClearAll}>
        Clear all to-dos
          </DefaultButton>
        </ButtonContainer>
        {doneTodos.map((todo, index) => (
          <ToDoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
        ))}
        {/* <ul>
        {todoList.map((singleToDo) => {
          return <li key={singleToDo.id}>{singleToDo.name}</li>
        })}
      </ul> */}
      </section>
    </Wrapper>
  );
};
