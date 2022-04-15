import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux"

const StyledHeader = styled.div `
h1 {
    font-size: 24px;
    text-decoration: underline;
}

h3 {
    font-family: arial;
    color: yellow;
}
`


export const Header = () => {
    const allTodos = useSelector((store) => store.list.todos)

    
    return (
        <StyledHeader>
        <div className="header">
            <h3>POST IT YOUR TODOs</h3>
            <h1>You have {allTodos.length} todo's</h1>
        </div>
        </StyledHeader>
    )
}