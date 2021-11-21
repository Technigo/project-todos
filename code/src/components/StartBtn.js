import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import todos from "reducers/todos"



const StyledStartBtn = styled.button`
    background-color: #333;
    color: #80B477;
    border: none;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 5px -6px;

    @media (min-width: 767px) {
        width: 112px;
        height: 112px;
    }
`


const StartBtn = () => {
    const dispatch = useDispatch()

    const addTodo = (id) => {
        dispatch(todos.actions.addTodo(id))
    }

    return (
            <StyledStartBtn 
                className='pulse'
                // onClick={() => addTodo('testing')}>
                onClick={() => addTodo('Hey! Mark this as done!')}>
                <i className="fas fa-plus"></i>
            </StyledStartBtn>
    )
}

export default StartBtn
