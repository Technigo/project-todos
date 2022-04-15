import React from "react"
import { AddTodo } from "../components/AddTodo"
import { Header } from "../components/Header"
import { ToDoList } from "../components/TodoList"
import styled from "styled-components"

const Main = styled.main`
    height: 100%;
    background-color: #e9ecef;
    border-radius: 1rem;
  
`

export const ToDoPage = () => {
    return (
        <Main>
            <Header />
            <AddTodo />
            <ToDoList />
        </Main>
    )
}