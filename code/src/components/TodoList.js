import React from "react"
import { useDispatch, useSelector } from "react-redux"

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <main className='main'>
            <h1>You need to do this!</h1>
            {items.map((item, index) => (
                <section className='todo-container' key={item.id}>

                    <label className='title-radio'>
                        <input
                            className='todo-radio'
                            type='checkbox'
                            checked={item.isComplete}
                            onChange={() => onToggleTodo(item.id)}
                            />
                            <p>{item.text}</p>
                    </label>

                    <button 
                        className='delete-btn'
                        onClick={() => onDeleteTodo(item.id)}>
                       <i className="fas fa-minus-circle"/>
					</button>
                </section>

            ))}
        </main>
    )
}

export default TodoList

