import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Counter = () => {
    const todos = useSelector(state => state.todos.items)
    const leftTodo = todos.filter(todo => todo.complete === false)

    return (
        <CounterContainer>
            <CounterText>
                You have {leftTodo.length} out of {todos.length} To-Do's remaining.
            </CounterText>
        </CounterContainer>
    );
};

const CounterContainer = styled.section`
display: flex;
justify-content: center;
background-color: #F4F4F4;
padding-top: 20px;
padding-bottom: 20px;
`

const CounterText = styled.text`
font-size: 18px;
`