import React from "react"
import styled from "styled-components"
import { CreateTodoHeader } from "../components/CreateTodoHeader"
import { NewTodoInput } from "components/NewTodoInput"

const Main = styled.main`
    height: 100%;
    background-color: #e9ecef;
    width:95vw;
    max-width:500px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

export const CreateTodo = () => {
    return (
        <Main>
            <CreateTodoHeader />
            <NewTodoInput />
        </Main>
    )
}