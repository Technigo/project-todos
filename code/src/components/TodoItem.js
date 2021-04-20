import React from 'react'
import { useDispatch } from 'react-redux'
import moment from "moment";

import { todos } from "../reducers/todos";

export const TodoItem =({ item }) => {
    const dispatch = useDispatch()

    return (
        <article className="todo">
            <p>{todo.text}</p>
            <input>
            </input>
            <DateStamp>
                Created: {moment(item.createdDate).format("ddd Do MMM")}
            </DateStamp>
        </article>

    )
}