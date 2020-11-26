import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AllTodos = styled.div`
    font-weight: bold;
    text-shadow: 2px 2px white;
`;

const Complited = styled(AllTodos)`
    color: #2caf2c;
    text-shadow: 2px 2px #0e0d0d;
`;

const Uncomplite = styled(AllTodos)`
    color: #d42929;
    text-shadow: 2px 2px #0e0d0d;
`;

export const CountItems = () => {
    const items = useSelector(store => store.todos.items);

    const complited = items.filter(item => item.checked).length;
    const uncomplite = items.length - complited;

    return (
        <div>
            <AllTodos>All Todos: {items.length}</AllTodos>
            <Complited>Complited Todos: {complited}</Complited>
            <Uncomplite>Uncoplite Todos: {uncomplite}</Uncomplite>
        </div>
    )

}