import React from "react"
import { useDispatch } from "react-redux"
import todos from "reducers/todos"
import { StyledStartBtn } from 'styling/Styling'



const StartBtn = () => {
    const dispatch = useDispatch()

    const addTodo = (id) => {
        dispatch(todos.actions.addTodo(id))
    }

    return (
            <StyledStartBtn 
                className='pulse'
                onClick={() => addTodo('Hey! Mark this as done!')}>
                <i className="fas fa-plus"></i>
            </StyledStartBtn>
    )
}

export default StartBtn
