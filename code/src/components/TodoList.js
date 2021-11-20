import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ListOfTodos = styled.div`
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

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);

    return <ListOfTodos> 
        {items.map(item => (
        <div key={item.id}>{item.text}</div> 
        ))}         
        </ListOfTodos>
};

export default TodoList;