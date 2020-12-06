import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import moment from 'moment';
import styled from 'styled-components';
// import DatePicker from 'react-datepicker';



import { todos } from '../reducers/todos';

const ButtonAdd = styled.button`
    align-items: center;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid red;
    margin: 15px;
    background-color: #fff;
`;

const Input = styled.input`
  height: 50px;
  min-width: 70%;
  font-size: 24px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
`;

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onTodoAdd = () => {
        setValue('');
        dispatch(todos.actions.addItem(value));
       
    }

    return (
        <Container>
            <div>
            <Input
                type="text"
                placeholder="What's next?"
                value={value}
                required
                onChange={e => setValue(e.target.value)}
            />
            <ButtonAdd 
                type="button"
                onClick={onTodoAdd}>
                <span role="img" aria-labelledby="plus sign emoji">
                    ➕
                </span> 
            </ButtonAdd>
                </div>
        </Container>
    );
};

export default AddTodo;

const Container = styled.form`
    width: 80%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    color: #fff
`;






