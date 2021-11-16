import React from "react"
import { useSelector, useDispatch } from "react-redux"
import todos from "reducers/todos"

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    console.log(items)

    return (
        <section>
            <p>Total todos: {items.length}</p>
            {items.map((item) => (
                <div key={item.id}>
                    <p>{item.text}</p>
                    <input type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
                    <p>{item.timePosted}</p>
                    <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
                </div>
            ))}
        </section>
    )
}

export default TodoList