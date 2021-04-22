import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


export const TodoCounter = () => {
    const todos = useSelector((store) => store.todos.items.filter((todo) => !todo.isComplete));
    const lefttodos = useSelector((store) => store.todos.items.filter((todo) => todo.isComplete));

    return (
        <>
            <Counter>{lefttodos.length}/{todos.length}</Counter>
        </>
    )
}

    const Counter = styled.p`
    font-size: 12px;
    width: 300px;
    text-align: right;
        @media (min-width: 768px) {
                width: 480px;
            }
`;

