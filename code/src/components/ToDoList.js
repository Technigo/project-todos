import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import ToDo from './ToDo';

import todos from '../reducers/todos';

import { Wrapper } from '../styles/GlobalStyles';

const ToDoList = () => {
  const allTodos = useSelector((store) => store.todos.todoData);

  const dispatch = useDispatch();

  const incomplete = allTodos.filter((item) => !item.complete);

  const isCompleteToggle = (todo) => {
    dispatch(todos.actions.toggleItem(todo));
  }

  const deleteTodo = (todo) => {
    dispatch(todos.actions.removeToDo(todo));
  }

  if (allTodos.length > 0) {
    return (
      <>
        <Wrapper>
          {allTodos.map((todo) => (
            <ToDoItem key={todo.id}>
              <CheckBox
                type="checkbox"
                id={todo.id}
                checked={todo.complete}
                onChange={() => isCompleteToggle(todo.id)} />
              <ToDoText><p>{todo.text}</p></ToDoText>

              <Deletebtn type="button" onClick={() => deleteTodo(todo.id)} />

            </ToDoItem>
          ))}
        </Wrapper>
        <ToDo allTodos={allTodos} incomplete={incomplete} dispatch={dispatch} />
      </>
    )
  } else {
    return (
      <Wrapper>
        <h3>Yay! There are no more task for you to dotted</h3>
      </Wrapper>
    )
  }
}

export default ToDoList

const ToDoItem = styled.div`
  border: 2px solid magenta;
  display: flex;
  width: 80%;
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  background: pink;
`;

const ToDoText = styled.div`

`;

const Deletebtn = styled.button`


`;