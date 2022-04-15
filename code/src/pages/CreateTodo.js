import React, {useState} from "react"
import { useDispatch } from "react-redux"
import  {todos} from '../reducers/todos'
import styled from "styled-components"
import { CreateTodoHeader } from "../components/CreateTodoHeader"
import { NewTodoInput } from "components/NewTodoInput"

export const CreateTodo = () => {
    return (
        <main>
            <CreateTodoHeader />
            <NewTodoInput />
        </main>
    )
}