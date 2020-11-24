/*

import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import { Container } from '../shared/Container'
import Trash from '../assets/trash-can.png'
import styled from 'styled-components'


const RemoveAll = styled.div`
  display:flex;
  justify-content:center;
`

export const Summary = () => {
    const dispatch = useDispatch()

    const handleRemoveAll = () => {
        dispatch(todos.actions.removeAll())
    }

    return (
        <Container>
            <RemoveAll>
                <button
                    className="remove-all"
                    type="button"
                    onClick ={handleRemoveAll}>
                    Delete All!
                    <img src={Trash} alt="trashcan"/>
                </button>
            </RemoveAll>
        </Container>
    )
}

*/