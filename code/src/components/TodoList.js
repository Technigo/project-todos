import React from "react"
import { useDispatch, useSelector } from "react-redux"

import todos from '../reducers/todos'
// import NumberOfCompleted from "./NumberOfCompleted"
import NumberOfTodos from './NumberOfTodos'

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
            <NumberOfTodos />
            {items.map((item, index) => (
                <section className='todo-container' key={item.id}>

                    <label className='title-radio'>
                        <input
                            className='todo-radio'
                            type='checkbox'
                            checked={item.isComplete}
                            onChange={() => onToggleTodo(item.id)}
                            />
                            <div className="checkmark"></div>
                            <p>{item.text}</p>
                    </label>

                    <button 
                        className='delete-btn'
                        onClick={() => onDeleteTodo(item.id)}>
                       <i className="fas fa-minus-circle"/>
					</button>
                </section>
            ))}
            {/* <NumberOfCompleted /> */}
        </main>
    )
}

export default TodoList

