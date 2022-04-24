import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import uniqid from 'uniqid';

import todos from 'reducers/todos';

const FormContainer = styled.form`
 background-color: #F3F4ED; 
 border-radius:1.1rem ;
 width: 80%;
 max-width: 700px;
 margin: auto;
   
`;

const Button = styled.button`
 color: #C06014;
 border-radius: 30%;
 border: none;
`;


const Input = styled.input`
  width: 80%;
  background-color: #F3F4ED;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-style: oblique;
  margin: 5px;
  padding: 10px;
  border: none;
`;



const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: uniqid(),
            name: inputValue,
            isCaught: false,
        }

        dispatch(todos.actions.addItem(newTodo));

        setInputValue('');
    };

    return (
        <FormContainer>
            <form onSubmit={onFormSubmit}>

                <Input
                    type='text'
                    value={inputValue}
                    required
                    placeholder='Add here'
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <Button type='submit'>
                    <span
                        role="img"
                        aria-label="submit-mark"
                    >➕</span>


                </Button>
            </form>
        </FormContainer>
    )
};

export default AddTodo;