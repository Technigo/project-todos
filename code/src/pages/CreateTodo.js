import React, {useState} from "react"
import { useDispatch } from "react-redux"
import  {todos} from '../reducers/todos'
import styled from "styled-components"
import { CreateTodoHeader } from "../components/CreateTodoHeader"
import { NewTodoInput } from "components/NewTodoInput"

const Main = styled.main`
    height: 100%;
    background-color: #e9ecef;
    border-radius: 1rem;
    width:95vw;
    max-width:500px;
    box-shadow: 10px 10px 5px gray;
`

export const CreateTodo = () => {
    return (
        <Main>
            <CreateTodoHeader />
            <NewTodoInput />
        </Main>
    )
}