import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Todos from "../reducers/Todos";

//styling the component here:
const ListOfTodos = styled.div`
display: flex;
flex-direction: column; 
align-items: flex-start;
width: 350px;
height: 350px;
padding: 20px;    
margin: 50px auto 0;
border: 2px solid grey;
border-radius: 3px;
font-weight: 600;
overflow-y: scroll;
`
const TaskContainer = styled.div`
display: flex;    
align-items: center;
justify-content: space-between;
width: 325px;
margin: 3px;
padding: 5px 10px;
border: 1px solid black;
border-radius: 4px;
overflow-wrap: break-word;
word-break: break-word;
`
const List = styled.h3`
font-family: 'Hind Vadodara', sans-serif;
`
const Checkbox = styled.input`
color: yellow;
`
const DeleteButton = styled.button`
border: none;
background: none;
`

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);
    const dispatch = useDispatch();
    const onToggleTodo = (id) => {
        dispatch(Todos.actions.toggleTodo(id)) //by passing the input here, we know what is the current property from the user
};
    const onDeleteTodo = (index) => {
        dispatch(Todos.actions.deleteTodo(index));
    };
    return <ListOfTodos> 
        <List>My list of To-Do's:</List>
        {items.map((item, index) => (
        <TaskContainer key={item.id}>
            <Checkbox 
                type="checkbox" 
                checked={item.isComplete} 
                onChange={() => onToggleTodo(item.id)} />
            <p>{item.text}</p>
            <DeleteButton onClick={() => onDeleteTodo(index)}><span role="img" aria-label="delete">❌</span></DeleteButton>
        </TaskContainer> 
        ))}         
        </ListOfTodos>
};

export default TodoList;