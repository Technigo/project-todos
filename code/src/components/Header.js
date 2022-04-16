import React from "react";
import styled from 'styled-components'

import { useSelector } from "react-redux"


const StyledHeader = styled.div `
h1 {
    font-size: 26px;
    margin: 0;
}

h2 {
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 20px;
}

h3 {
    display: flex;
    justify-content: flex-end;
    font-family: arial;
    color: #ff00b7;
    margin-top: 0;
}
`

export const Header = () => {
    const allTodos = useSelector((store) => store.list.todos)
    const completed = allTodos.filter((todo) => todo.isCompleted).length
    
    return (
        <StyledHeader>
        <div className="header">
            <h3>MY POST IT</h3>
            <h1>You have {allTodos.length} todo's</h1>
            <h2>You have done {completed} of them</h2>  
        </div>
        </StyledHeader>
    )
}