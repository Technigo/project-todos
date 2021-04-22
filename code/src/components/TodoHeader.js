import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

//import slice
import todos from '../reducers/todos'

const TodoHeader = () => {
    const today = moment()

    const todos = useSelector((store) => store.todos.items)
    //Amount of todos in list
    const numberOfTodos = todos.length
    //Filter isComplete todos in array add length in return
    const completedTodos = todos.filter(todo => todo.isComplete)

    return (
        <header className="header-wrapper">
            <h1>What's up today?</h1>
            <p>{today.format('YYYY-MM-DD')}</p>
            <p>Todos:{completedTodos.length}/{numberOfTodos}</p>
        </header>
    )
}
export default TodoHeader