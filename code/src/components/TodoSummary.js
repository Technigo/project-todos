import React from "react"
import { useSelector } from "react-redux"

export const TodoSummary = () => {

    const list = useSelector(store => store.todos.list);

    const numDone = list.items.filter(item => item.done).length;

    return (
        <section className="todo-task-done">

            <h2>
                {numDone}/{list.items.length} tasks done
            </h2>


        </section>
    )

}