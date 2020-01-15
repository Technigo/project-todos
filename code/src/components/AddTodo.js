import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddTodo = () => {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()

    const handleInputChange = e => {
        setTodoText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!todoText()) {
            return
        }
        dispatch(todos.actions.AddTodo({ text: todoText }))
    }

    // return (
    //     <div className="InputField">
    //         <form onSubmit={handleSubmit}>
    //             <button type="submit">Add todo</button>
    //             <input value={todoText} type="text" onChange={handleInputChange} />
    //         </form>
    //     </div>
    // )
    // }


    return (

        <article className="InputField">
            <form onSubmit={handleSubmit}>

                <button
                    type="button"
                    // disabled={todo.inventory === 0}
                    onClick={() => ((AddTodo))}>
                    <span className="emoji" role="img" aria-label="butterfly">🦋</span>
                    <input value={todoText} type="text" onChange={handleInputChange} />
                </button>

            </form>
        </article>
    )
}

