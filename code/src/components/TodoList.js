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
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%), 0 2px 6px 2px rgb(0 0 0 / 15%);
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
background: rgb(237, 237, 237); 
border: 1px solid black;
border-radius: 3px;
box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
font-family: 'Hind Vadodara', sans-serif;
font-weight: 550;
overflow-wrap: break-word;
word-break: break-word;
`
const TaskWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

`
const Display = styled.div`
display: flex;
width: 100%
flex-direction: flex-start;
align-items: center;
`
const List = styled.h3`
font-family: 'Hind Vadodara', sans-serif;
`
const Content = styled.p`
margin-left: 15px;
font-family: 'Hind Vadodara', sans-serif;
font-weight: 550;
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
    const taskCounter = useSelector((store) => store.todos.items.length); //to get how many tasks there are

    
    return <ListOfTodos> 
        <TaskWrapper>
            <List>My list of To-Do's:</List>
            <div>({taskCounter} tasks in total)</div>{/* displays .length of tasks*/}
        </TaskWrapper>
        {items.map((item, index) => (
        <TaskContainer key={item.id}>
            <Display>
                <input 
                type="checkbox" 
                checked={item.isComplete} 
                onChange={() => onToggleTodo(item.id)} 
                />
                <Content>{item.text}</Content>
            </Display>
            <DeleteButton onClick={() => onDeleteTodo(index)}><span role="img" aria-label="delete">❌</span></DeleteButton>
        </TaskContainer> 
        ))}         
        </ListOfTodos>
};

export default TodoList;