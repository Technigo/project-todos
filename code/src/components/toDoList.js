import React from "react"
import { useDispatch } from "react-redux"
import {toDo, toDos} from "reducers/postReducer"

export const toDoList = ()=> {
    const dispatch = useDispatch();

    return(
        <ul>
            {toDos.map((todoItem, index) => {
                return (
                    <li>{todoItem, index}</li>
                )
                })}
        </ul>
    )
}