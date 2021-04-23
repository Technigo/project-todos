import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'

import '../css/TodoHeader.css'
//import slice
import todos from '../reducers/todos'

const TodoHeader = () => {
    const today = moment()

    const todoItems = useSelector((store) => store.todos.items)
    //Amount of todos in list
    const numberOfTodos = todoItems.length
    //Filter isComplete todos in array add length in return
    const completedTodos = todoItems.filter(todo => todo.isComplete)

    const dispatch = useDispatch()

    const onClickComplete = () => {
        dispatch(todos.actions.completeAllTodo())
    }

    return (
        <header className="header-wrapper">
            <div className="header-title-container">
            <h1>What's up today?</h1>
            <p>{today.format('YYYY-MM-DD')}</p>
            </div>
            <div className="amount-todos-container">
                <p>Completed:{completedTodos.length}/{numberOfTodos}</p>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={onClickComplete}
                    aria-label="check all"
                >
                    Check all
                </Button>
            </div>
        </header>
    )
}

export default TodoHeader