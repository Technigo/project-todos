import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from '../reducers/todos'

const ToDoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }
    return (<section>
        {items.map((item, index) =>(
            <div key={item.id}>
                <p>{item.text}</p>
                <input 
                    type="checkbox" 
                    checked={item.isComplete} 
                    onChange={() => onToggleTodo(item.id)}
                />
            </div>
        ))}
    </section>
    )
}

export default ToDoList