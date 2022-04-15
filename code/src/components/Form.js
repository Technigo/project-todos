import React, { useState } from 'react'
import styled from 'styled-components'

import { useDispatch } from "react-redux";
import { list } from 'reducers/list';
import uniqid from 'uniqid';


const StyledForm = styled.form `
    form {
        display: flex;
        flex-direction: column;
        // margin: 10px;
    }

    .input-area {
        display: flex;
    }

    input {
        background-color: #FFFF99;
    }

    .submit-button {
        margin-left: 10px;
        width: 10%;
        background-color: #FFFF99;
        border: none;
        font-size: 30px;
    }
`

//The form
export const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(list.actions.addTodo(newTodo));
        setInputValue('')
    }
        const newTodo = {
            id: uniqid(),
            title: inputValue,
            isCompleted: false,
        }

    return (
        <StyledForm>
            <form onSubmit={onFormSubmit}>
                <label>New todo:</label>
                <div className='input-area'>
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)} />
                    <button 
                        className="submit-button" 
                        type='submit'>
                        +
                    </button>
                </div>
            </form>
        </StyledForm>
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