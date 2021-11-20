import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import Todos from '../reducers/Todos'

//styling the component here:
const Container  = styled.div`
display: flex;
flex-direction: block; 
align-items: start;
justify-content: flex-start;
width: 350px;
padding: 20px;    
margin: auto;
border: 2px solid grey;
border-top: none;
`
const Input = styled.input`
display: inline-block;
padding: 20px;
margin: 10px 10px;
border-radius: 3px;
font-weight: 600;
overflow-wrap: break-word;
word-break: break-word;
font-family: 'Hind Vadodara', sans-serif;
`
const Button = styled.button`
display: inline-block;
padding: 10px 20px;
margin: auto;
width: auto;
background: transparent;
color: black;
border-radius: 5px;
border: 2px solid grey;
font-family: 'Hind Vadodara', sans-serif;
font-weight: 600;
`

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const onAddTodo = () => {
        dispatch(Todos.actions.addTodo(input)) //by passing the input here, we know what is the current property from the user
    };

    return (    
        <Container>
            <Input 
                type="text" 
                value={input} 
                onChange={(event) => setInput(event.target.value)}/>
            <Button onClick={onAddTodo} > 
                Add task 
            </Button>                
        </Container>
    )
};

export default AddTodo;