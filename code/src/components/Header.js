import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { TodoList } from "./TodoList";

const StyledHeader = styled.div `
h1 {
    font-size: 18px;
    text-decoration: underline;
}
`


export const Header = () => {
    const allTodos = useSelector((store) => store.list.todos)
    console.log(allTodos)

    const totalTodos = useSelector((store) => (
        allTodos.map((total, todo) => (total + (todo.count)), 0)
    ))

    return (
        <StyledHeader>
        <div className="header">
            <h1>You have {totalTodos} todo's</h1>
            {/* <ul>
                {allTodos.map((todo) => (
                    <TodoList key={todo.id} todo={todo} />
                ))}
            </ul> */}
        </div>
        </StyledHeader>
    )
}