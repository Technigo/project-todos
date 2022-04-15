import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todo from "reducers/todo";

const TodoItem = styled.article`
padding: 8px;
border-radius: 8px;
color: purple;  
max-width: 400px;
margin-top:25px;
margin-bottom: 15px;
position:relative;
border:solid 2px;
font-size: 15px;
font-family: monospace;
box-shadow: 5px 5px #000;
    &:hover {
		background-image: linear-gradient(pink, yellow);
}
` ;



const CheckBox = styled.input`
	position: relative;
    height:18px;
    width:18px;
	top: 5px;
    border-radius:5px
    outline: 2px solid #aaa;
    cursor:pointer;
`;

const DeleteButton = styled.button`
position:absolute;
top:10px;
right: 10px;
background:none;
border:none;
cursor:pointer;
`;


const TodoList = () => {
    const todoList = useSelector((store) => store.todo.items);

    const dispatch = useDispatch();

    const onTodoToggle = (todoId) => {
        dispatch(todo.actions.toggleItem(todoId));
    };

    const onTodoDelete = (index) => {
        dispatch(todo.actions.deleteItem(index));

    };

    return (
        <section>
            {todoList.map((todoItem, todoIndex) => (
                <TodoItem key={todoItem.id}>
                    <h2>{todoItem.name}</h2>
                    <label>
                        Done
                        <CheckBox
                            type="checkbox"
                            checked={todoItem.done}
                            onChange={() => onTodoToggle(todoItem.id)}
                        />
                    </label>

                    <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
                        <span role="img" aria-label="delete">
                            ✖️
                        </span>
                    </DeleteButton>
                </TodoItem>
            ))}
        </section>
    );
};


export default TodoList;