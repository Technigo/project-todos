import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { AddTodo } from "./AddTodo";

const StyledHeader = styled.div `
h1 {
    font-size: 18px;
    text-decoration: underline;
}
`


export const Header = () => {
    const allTodos = useSelector((store) => store.list.todos)

    const totalTodos = useSelector((store) => (
        store.list.todos.reduce((total, todo) => (total + (todo.quantity)), 0)
    ))

    return (
        <StyledHeader>
        <div className="header">
            <h1>You have {totalTodos} todo's</h1>
            <ul>
                {allTodos.map((todo) => (
                    <AddTodo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
        </StyledHeader>
    )
}