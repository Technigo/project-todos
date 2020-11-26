import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const AddItemButton = styled.button`
    color: gray;
    width: 50px;
    height: 50px;
`

const ItemInput = styled.input`
    width: 65%;
    height: 25px;
    padding: 10px;
    margin: 5px;
    font-size: 20px;
`

const TodoInput = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const onTodoInputAdd = () => {
        dispatch(todos.actions.addItem(inputValue));
        setInputValue('');
    }



    // dispatch(todos.actions.addTodo({
    //     text: inputValue,
    //     done: false
    // }));

    //to clear input
    //setInputValue('');

    return (
        <form>
            <ItemInput
                type="text"
                placeholder="Add item"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                >
            </ItemInput>
            <AddItemButton onClick={onTodoInputAdd}>
                ✚
            </AddItemButton>  
        </form>
    )
};

export default TodoInput;