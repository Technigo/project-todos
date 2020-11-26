import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';

const Container = styled.div`
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

const ToDoItem = ({ id, name, isCompleted }) => {
    const dispatch = useDispatch();

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (
        <Container>
            <Text>
            {name}</Text>
            <div>
            <Button onClick={onIsCompletedChange}>
            {isCompleted ? "☒" : "☑︎"}
            </Button>
            </div>
            <div >
            <Button onClick={onTodoDelete}>
                ⓧ
                </Button>
                </div>
        </Container>
    );
};

export default ToDoItem;