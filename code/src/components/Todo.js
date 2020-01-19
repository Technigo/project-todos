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
        <article  className="todos">
        <li className="todo">
            <label>  
                <input className="checkbox"
                    type="checkbox" 
                    checked={props.todo.completeTodo} 
                    onChange={handleCompleteTodo} />
                        {/* <span 
                            className="emoji" 
                            role="img" 
                            aria-label="butterfly">
                            🦋
                        </span> */}
            </label>
            {props.todo.name}
        </li>
        </article>
    )
}
