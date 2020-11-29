import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { todos } from "reducer/todos"

import styled from "styled-components"

export const Input = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()
    const addTodo = (event) => {
        dispatch(todos.actions.addTodo(newTodo))
        setNewTodo('')
    }

    return(
        <Main>
            <NewButton disabled={newTodo.length === 0} onClick={addTodo}>Add task</NewButton>
            <Input
                type="text"
                onChange={(event) => setNewTodo(event.target.value)}
                value={newTodo}
                onKeyPress={(event) => {event.key === "Enter" && addTodo()}}
                required
            />
        </Main>
    )
}

const Main = styled.section``

const NewButton = styled.button``