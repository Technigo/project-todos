import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from 'reducers/todos';

const TodoContainer = styled.article`
 width: 80%;
 max-width: 700px;
 margin: auto;
`;

const TodoItem = styled.article`
 margin-top: 7px;
 color: #424642;
 position: relative;
 align-items: center;
 display: flex;
 padding: 9px ;
 border-radius: 1.2rem;
 background: linen;
`;

const TodoItemText = styled.h2`
  font-family: 'Oswald', sans-serif;
  color: #424642;
  font-size: 1.6rem;
  text-align: center;
`;

const Input = styled.input`
  cursor: pointer;
  background-color: #536162;
  width: 1.2em;
  height: 1.2em;
  border: 1px solid #424642;
  border-radius: 6px;
  vertical-align: middle;
`;

const DeleteButton = styled.button`
 cursor: pointer;
 position: absolute;
 right: 10px;
 background: none;
 border: none;
 font-size: 1.2rem;
`;


const TodoList = () => {
    const todoList = useSelector((store) => store.todos.items);

    const dispatch = useDispatch();

    const onTodoToggle = (todoId) => {
        dispatch(todos.actions.toggleItem(todoId))
    };

    const onTodoDelete = (index) => {
        dispatch(todos.actions.deleteItem(index));
    }

    return (
        <TodoContainer>
            {todoList.map((todoItem, todoIndex) => (
                
                <TodoItem key={todoItem.id}>
                    <Input
                        type='checkbox'
                        checked={todoItem.isComplete}
                        onChange={() => onTodoToggle(todoItem.id)}
                    />
                        <TodoItemText>{todoItem.name}</TodoItemText>
                    <DeleteButton onClick={() => onTodoDelete()}>
                        <span role='img' aria-label='delete'>🗑️</span>
                    </DeleteButton>
                </TodoItem>
            ))}
            </TodoContainer>
    );
};

export default TodoList;