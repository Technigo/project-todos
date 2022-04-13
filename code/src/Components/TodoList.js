import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todo from "reducers/todo";

const TodoItem = styled.article`
padding: 8px;
border-radius: 8px;
margin-top:35px;
margin-bottom: 15px;
color: purple;
position:relative;
background-image: linear-gradient(pink, yellow);
font-size: 15px;
&:hover {
    color: black;
    
}
`
;

const CheckBox = styled.input`
	position: relative;
    height:18px;
    width:18px;
	top: 5px;
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

    return (
        <section>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id}>
                    <h2>{todoItem.name}</h2>

                    <CheckBox
                        type="checkbox"
                        checked={todoItem.Done}
                        onChange={() => onTodoToggle(todoItem.id)}
                    />
                    <label htmlFor='Done'>
                        Done
                    </label>
                    <DeleteButton>
                        <span role="img" aria-label="delete">
                            ❌
                        </span>
                    </DeleteButton>
                </TodoItem>
            ))}
        </section>
    );
};


export default TodoList;