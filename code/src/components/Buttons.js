import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/Tasks'

const devices = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
}

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-start;

`
const CheckallButton = styled.button`
background-color: #FFF;
border: 1px solid #000;
width: 5rem;
padding: 5px;
margin: 5px;
font-size: 16px;

@media ${devices.desktop} {
    cursor: pointer;

        &:hover {
			box-shadow: 3px 3px 3px;
            border: none;
            background-color: #D4ECDD;
			transition: all 0.2s ease-in;
    }
}
`

const UncheckButton = styled.button`
background-color: #FFF;
border: 1px solid #000;
width: 5rem;
padding: 5px;
margin: 5px;
font-size: 16px;

@media ${devices.desktop} {
    cursor: pointer;
    &:hover {
        box-shadow: 3px 3px 3px;
        background-color: #D4ECDD;
        border: none;
        transition: all 0.2s ease-in;
}
}
`
const RemoveAllButton = styled.button`
background-color: #FFF;
border: 1px solid #E9190F;
width: 5rem;
padding: 5px;
margin: 5px;
font-size: 16px;

@media ${devices.desktop} {
    cursor: pointer;
    &:hover {
        box-shadow: 3px 3px 3px;
        border: none;
        background-color: #EF233C;
        transition: all 0.2s ease-in;
}
}
`

const CustomButtons = () => {
    const dispatch = useDispatch()

    const CheckAllTodo = () => {
        dispatch(tasks.actions.checkAllTodo())
    }

    const unCheckAllTodo = () => {
        dispatch(tasks.actions.unCheckTodo())
    }

    const onRemoveAll = () => {
        dispatch(tasks.actions.deleteAllTodos())
    }

    return (
        <ButtonContainer>
            <CheckallButton onClick={CheckAllTodo}>Check all todos</CheckallButton>
            <UncheckButton onClick={unCheckAllTodo}>Uncheck all</UncheckButton>
            <RemoveAllButton onClick={onRemoveAll}>Clear all todos</RemoveAllButton>
        </ButtonContainer>
    )
}

export default CustomButtons