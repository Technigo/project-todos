import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


import { todos } from '../reducers/todos';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const Text = styled.div`
  /* height: auto; */
  /* width: 80%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
  font-size: 20px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  color: black;
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

const ToDoItem = ({ id, text, done }) => {
    
    const dispatch = useDispatch();
    console.log(`Text: ${text}`)

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    };

    const onIsCompletedChange = () => {
        dispatch(todos.actions.checkCompleted(id));
    };

    return (
        <Container>
                        <Text>
                            {text}
                            </Text>
                        <Button type="button" onClick={onIsCompletedChange}>
                        {(done) ? "☒" : "☑"}
                        </Button>

                        <Button type="button" onClick={onTodoDelete}>
                        ⓧ
                        </Button>

        </Container>
    );
};

export default ToDoItem;