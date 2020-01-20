import React from 'react'
import { useDispatch } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// created our own todo component, a single one
export const Todo = (props) => {
    const dispatch = useDispatch()

    const handleCompleteTodo = () => {
        dispatch(todoTasks.actions.toggleCompleteTodo(props.todo.id))
    }

    // function to remove one todo with a button
    // const handleRemoveButtonClick = () => {
    //     dispatch(todoTasks.actions.removeItem(props.todo.id))
    //   }
      
    return (
        <div className="todos">
            <li className="todo">
                <label>  
                    <input className="checkBox"
                        type="checkbox" 
                        checked={props.todo.completeTodo} 
                        onChange={handleCompleteTodo} />
                    <span>
                        {props.todo.name} 
                    </span>      
                </label>
            </li>
        </div>
    )
}
