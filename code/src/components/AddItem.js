import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import { Button, TextInput, Form } from '../styling/AddItemStyling'

export const AddItem = () => {
    const [text, setText] = useState ('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addItem({text}))
        setText('')
    }
    return(
        <Form onSubmit ={handleSubmit}>
            <label>
                <TextInput
                  placeholder="New todo"
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
            </label> 
                <Button
                  type="submit">
                  +
                </Button>
        </Form>
    )
}
