import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import '../css/TodoList.css'
//import slice
import todos from '../reducers/todos'

const TodoList = () => {
    //Same name as property name in reducer.
    //useSelector hook with access to whole store - only reaching for data in items[]
    const  items = useSelector((store) => store.todos.items)
    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    return (
        <div className="todolist-wrapper">
            <p>Your todos:</p>
            {items.map(todo =>(
                <div key={todo.id} className="todo-item">
                    <div className="todo-item-checkbox-container">
                        <Checkbox
                            checked={todo.isComplete}
                            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                            color="primary"
                            inputProps={{ "aria-label": "todo checkbox" }}
                        />
                        <p className={todo.isComplete && "todo-item-completed"}>{todo.description}</p>
                    </div>
                    <IconButton
                        aria-label="remove"
                        onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
                    >
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            ))}
        </div>
    )
}

export default TodoList