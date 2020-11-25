import React from 'react'
import { ClearAll } from './ClearAll'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #84a9ac;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const TodoHeader = styled.h1`
    font-size: 30px;
    font-weight: 300;
`

export const Header = () => {

    return (
        <Container>
                <TodoHeader>Todo list</TodoHeader>
                <ClearAll />
        </Container>
        
    )
}