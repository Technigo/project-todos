import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const InputContainer = styled.form`
    display: flex;
    width: 100%;
    margin-left: 35px;
    margin-right: 10px;

@media (min-width: 768px) {
    justify-content: center;
}
`;

const AddItemButton = styled.button`
    color: gray;
    width: 10%;
    height: 50px;
    margin-top: 5.4px;
    cursor: pointer;
`;

const ItemInput = styled.input`
    height: 25px;
    padding: 10px;
    margin: 5px; 
    font-size: 20px;
    width: 65%;
`;

const TodoInput = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();


    //Handle submit function to dispatch addItem action
    const onTodoInputAdd = (e) => {
        e.preventDefault();
    //This is where we dispatch the action to save the new todo item
        dispatch(todos.actions.addItem(inputValue));
        setInputValue('');
    }

    return (
        <InputContainer>
            <ItemInput
                type="text"
                placeholder="Add task"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            >
            </ItemInput>
            <AddItemButton onClick={onTodoInputAdd}>
                ✚
            </AddItemButton> 
        </InputContainer>
    );
};

export default TodoInput;