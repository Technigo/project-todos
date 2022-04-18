import React from "react"
import { Header } from "../components/Header"
import { ToDoList } from "../components/TodoList"
import styled from "styled-components"

const Main = styled.main`
    height: 100%;
    background-color: #e9ecef;
    border-radius: 1rem;
    width:95vw;
    max-width:500px;
    box-shadow: 10px 10px 5px grey;
`

export const ToDoPage = () => {
    return (
        <Main>
            <Header />
            <ToDoList />
        </Main>
    )
}