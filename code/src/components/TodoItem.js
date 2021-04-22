import React from 'react'
import { useDispatch } from 'react-redux'
// import moment from "moment";
import styled from "styled-components";


import { todos } from "../reducers/todos";

export const TodoItem =({ todo }) => {
    const dispatch = useDispatch()

    return (
            <> 
                <div
                    type="checkbox"
                    checked={todo.isComplete}
                    onClick={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    >{todo.isComplete ? "✔️" : "🔘"}</div>
                <TodoText>{todo.text}</TodoText>
            <Span>{todo.isComplete ? "Completed" : "Incompleted"}</Span>
            {/* <DateStamp>
                Created: {moment(item.createdDate).format("ddd Do MMM")}
            </DateStamp>  */}
            </>
    )
}
const TodoText = styled.p`
    width: 100%;
    margin: 5px;
    padding-left: 10px;
`

const Span = styled.span`
    font-size: 12px;
    color: #BDBDBD;
`