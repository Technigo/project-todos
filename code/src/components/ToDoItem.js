import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


import { todos } from '../reducers/todos';

const Container = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const Text = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 50%;
    border: 1px solid red;
    margin: 5px;
    background-color: #fff;
`

// const Input = styled.div`
//     color: #fff;
//     border: 1px solid red;

// `

const ToDoItem = ({ id, text, isCompleted }) => {
    const dispatch = useDispatch();

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    };

    const onCompletedChange = () => {
        dispatch(todos.actions.checkCompleted(id));
    };

    return (
        <Container>
            <Text> {text}</Text>
            <Button type="button" onClick={onCompletedChange}>
            {isCompleted ? "☒" : "☑"}
            </Button>
            <Button type="button" onClick={onTodoDelete}>
                ⓧ
                </Button>
        </Container>
    );
};

export default ToDoItem;