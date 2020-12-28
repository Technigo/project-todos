import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';
import { InputContainer, ItemInput, AddItemButton } from 'styling/TodoInputStyling';

const TodoInput = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    //Handle submit function to dispatch addItem action
    const onTodoInputAdd = (e) => {
        e.preventDefault();
    //This is where we dispatch the action to save the new todo item
        dispatch(todos.actions.addItem(inputValue));
        setInputValue('');
    };

    return (
        <InputContainer>
            <ItemInput
                type="text" required
                placeholder="Add task"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            >
            </ItemInput>
            <AddItemButton onClick={onTodoInputAdd} disabled={inputValue.length < 5}>
                ✚
            </AddItemButton> 
        </InputContainer>
    );
};

export default TodoInput;