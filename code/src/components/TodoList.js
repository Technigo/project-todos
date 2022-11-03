/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();
  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleTodoItem(id))
  }
  const onDeleteTodoButtonClick = (todosIndex) => {
    dispatch(todos.actions.deleteTodoItem(todosIndex))
  }
  return (
    <>
      {todoList.map((singleTodo, index) => {
        return (
          <EachTaskStyler key={singleTodo.id}>
            <input
              type="checkbox"
              checked={singleTodo.isDone}
              className="strikethrough"
              onChange={() => onIsDoneToggle(singleTodo.id)} />
            <label className="strikethrough">{singleTodo.name}
            </label>
            <RemoveButtonStyled onClick={() => onDeleteTodoButtonClick(index)} type="button" className="btn btn-warning">Remove</RemoveButtonStyled>
          </EachTaskStyler>
        );
      })}
    </>
  )
}

export default TodoList;

const EachTaskStyler = styled.div`
margin-bottom: 6%;
@media (min-width: 667px) {
margin-bottom: 5%;
}

@media (min-width: 1024px) {
margin-bottom: 2.5%;
}
`

const RemoveButtonStyled = styled.button`
  position: absolute;
  right:4vw;
`

