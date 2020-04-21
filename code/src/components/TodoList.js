import React from 'react'
import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem.js"

export const TodoList = () => {

    const list = useSelector((store) => store.todos.list);

    return (
        <article className="todo-list">

            {list.items.map((item, index) => (
                <TodoItem item={item} itemIndex={index} />
            ))}


        </article>


    )

}