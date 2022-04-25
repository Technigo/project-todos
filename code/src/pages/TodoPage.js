import React from "react"
import { Header } from "../components/Header"
import { ToDoList } from "../components/TodoList"
import styled from "styled-components"

const Main = styled.main`
    height: 100%;
    background-color: #e9ecef;
    width:95vw;
    max-width:500px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

export const ToDoPage = () => {
    return (
        <Main>
            <Header />
            <ToDoList />
        </Main>
    )
}