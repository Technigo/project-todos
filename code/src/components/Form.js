import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { list } from 'reducers/list';
import uniqid from 'uniqid';

//Button for dummy data, is currently hidden
export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <div> {todo.title} </div>
            <button onClick={() => dispatch(list.actions.addDummyTodo(todo))}> Add Todo </button>
        </div>
    )
}


//The form
export const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: uniqid(),
            title: inputValue,
            isCompleted: false,
        }

        dispatch(list.actions.addTodo(newTodo));
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>New todo:</label>
            <input 
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)} />
            <button 
                className="submit-button" 
                type='submit'>
                Add
            </button>
        </form>
    )
}






// export const Form = ({ todo }) => {
//     const dispatch = useDispatch()

//     const onFormSubmit = (event) => {
//         event.preventDefault()
//     }

//     return (
//         <form onSubmit={onFormSubmit}>
//             <label>New todo:</label>
//             <textarea onClick={() => dispatch(list.actions.addTodo(todo))} />
//             <button className="submit-button" type='submit'>
//                 Add
//             </button>

//         </form>
//     )
// }