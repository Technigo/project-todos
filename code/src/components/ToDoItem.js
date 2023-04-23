import React from 'react';
import styled from 'styled-components';

const SingleTodo = styled.div`
margin: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  line-height: 1em;
`
const TodoText = styled.div`
  cursor: pointer;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  font-size: 22px;
`

const DeleteButton = styled.button`
  background: #f6f6f6;
  border: none;
  // font-family: ;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  padding: 0px 9px;
  color: #ccc;
`

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
  return (
    <SingleTodo key={todo.id}>
      <TodoText onClick={() => toggleTodo(todo.id)} isDone={todo.isDone}>
        <p>{todo.text}</p>
      </TodoText>
      <DeleteButton onClick={() => deleteTodo(index)} type="button" title="Remove task">
        {' '}
          X
      </DeleteButton>
    </SingleTodo>
  );
};

export default TodoItem;