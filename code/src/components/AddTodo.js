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
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%), 0 2px 6px 2px rgb(0 0 0 / 15%);
`
const Input = styled.input`
display: inline-block;
padding: 20px;
margin: 10px 10px;
border-radius: 3px;
background: rgb(237, 237, 237);
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
border-radius: 3px;
border: 2px solid grey;
box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
font-family: 'Hind Vadodara', sans-serif;
font-weight: 600;

&:hover {
    color: white;
    background-color: grey;
}
&:active {
    background-color: grey;
    transition: 0.5s;
    color: #white;
}
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
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type new to-do"/>
            <Button onClick={onAddTodo} > 
                Add task 
            </Button>                
        </Container>
    )
};

export default AddTodo;