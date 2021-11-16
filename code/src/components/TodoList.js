import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList =()=> {
const items = useSelector ((store) => store.todos.items)
const taskNumber = useSelector((store) => store.todos.items.length) // variable to obtain length of to-dos list
const completed = useSelector ((store) => store.todos.items.isComplete)
const dispatch = useDispatch()

const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
    }//
const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <>
    <section> 
        {items.map((item) => (
            <div className ="flex-item" key={item.id}>
                <p>{item.text}</p>
                <input type="checkbox"checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/> 
                <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
            </div>
        ))}
    </section>{/*// mapping over item to show the text inputs*/}
    
       
        <div>{taskNumber} tasks</div> {/*shows the number of tasks in total*/}
        <div>{completed}</div>
        </>
    )
}

export default TodoList