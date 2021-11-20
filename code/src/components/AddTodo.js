import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import Todos from '../reducers/Todos'

//styling for the component here:
const Container  = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
    padding: 20px;    
    margin: 70px 50px;
    border: 2px solid grey;
    overflow: scroll;
    `
const Label = styled.label`
    display: flex;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    `
const Input = styled.input`
    display: inline-block;
    padding: 20px;
    margin: 0.5rem 1rem;
    border-radius: 3px;
    `
const Button = styled.button`
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: black;
    border-radius: 3px;
    border: 2px solid grey;
    `

const AddTodo = () => {
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();

    const onAddTodo = () => {
        dispatch(Todos.actions.addTodo(input)) //by passing the input here, we know what is the current property from the user
    };

    return (    
        <Container>
            <Label>New task: </Label>
                <Input 
                    type="text" 
                    value={input} 
                    onChange={(event) => setInput(event.target.value)}/>
                <Button onClick={onAddTodo}> 
                    Add To-Do 
                </Button>
        </Container>
    )

};

export default AddTodo;