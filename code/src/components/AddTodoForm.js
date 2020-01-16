import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// defined our state from react
export const AddTodoForm = () => {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    //When the input changes it will trigger the 
    //event which is passed on and the name/input will change.

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todoTasks.actions.addTodo(todoText))
        setTodoText('')
    }

    return (
        <article className="InputField">
            <form onSubmit={handleSubmit}>
                <label>
                    What do you want to add?
                    <input
                        type="text"
                        value={todoText}
                        onChange={(event) => setTodoText(event.target.value)} />
                </label>
                <button type="submit">Add to-do</button>
            </form>
        </article>
    )
}


// return (

//     <article className="InputField">
//         <form onSubmit={handleSubmit}>

//             <button
//                 type="button"
//                 // disabled={todo.inventory === 0}
//                 onClick={() => ((AddTodo))}>
//                 <span className="emoji" role="img" aria-label="butterfly">🦋</span>
//                 <input value={todoText} type="text" onChange={handleInputChange} />
//             </button>
//         </form>
//     </article>
// )
// }

