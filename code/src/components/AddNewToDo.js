import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import uniqid from 'uniqid'

import todos from 'reducers/todos'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid teal; */
  margin: 10px 5px;
  padding: 5px;
  position: relative;

  @media (min-width: 768px) {
    align-items: center;
  }

  input:invalid + span:after {
    position: absolute;
    content: '✖';
    color: teal;
    padding-left: 5px;
  }

  input:valid + span:after {
    position: absolute;
    content: '✓';
    color: teal;
    padding-left: 5px;
  }

  .button-container {
    text-align: center;
    margin-top: 0.5rem;
  }

  button {
    background-color: teal;
    border: 1px solid teal;
    border-radius: 12px;
    color: white;
    padding: 0.2rem 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.9rem;
    margin: 4px 2px;
    cursor: pointer;
  }
`

const AddNewToDo = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: uniqid(),
            text: text,
            isComplete: false
        }

        dispatch(todos.actions.addItem(newTodo))

        setText('')
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <div>
                <input
                    type="text"
                    id="text"
                    placeholder="What needs to be done?"
                    autoFocus={true}
                    autoComplete="off"
                    value={text}
                    maxLength="40"
                    size="30"
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <span></span>
            </div>
            <div className="button-container">
                <button type="submit">Add</button>
            </div>
        </StyledForm>
    )
}

export default AddNewToDo