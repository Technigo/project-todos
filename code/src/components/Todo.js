import React from 'react'
import { useDispatch } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// created our own todo component, a single one
export const Todo = (props) => {
    const dispatch = useDispatch()

    const handleCompleteTodo = () => {
        dispatch(todoTasks.actions.toggleCompleteTodo(props.todo.id))
    }
    // const handleRemoveButtonClick = () => {
    //     dispatch(todoTasks.actions.removeItem(props.todo.id))
    // }

    return (
        <div className="todos">
            <li className="todo">
                <label>
                    <input className="checkbox"
                        type="checkbox"
                        checked={props.todo.completeTodo}
                        onChange={handleCompleteTodo} />
                    <span>
                        {props.todo.name}
                    </span>
                    {/* <span *
                    className="emoji"
                    role="img"
                    aria-label="butterfly">
                    🦋
                        </span> */}
                    {/* </button> */}
                </label>

            </li>
        </div>
    )
}