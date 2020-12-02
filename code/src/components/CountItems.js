import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AllTodos = styled.div`
    font-weight: bold;
    text-shadow: 2px 2px white;
`;

const Complete = styled(AllTodos)`
    color: #2caf2c;
    text-shadow: 2px 2px #0e0d0d;
`;

const Uncomplete = styled(AllTodos)`
    color: #d42929;
    text-shadow: 2px 2px #0e0d0d;
`;

export const CountItems = () => {
    const items = useSelector(store => store.todos.items);

    const complete = items.filter(item => item.checked).length;
    const uncomplete = items.length - complete;

    return (
        <div>
            <AllTodos>All Todos: {items.length}</AllTodos>
            <Complete>Complete Todos: {complete}</Complete>
            <Uncomplete>Uncomplete Todos: {uncomplete}</Uncomplete>
        </div>
    )

}