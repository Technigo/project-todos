import React, { useState } from "react"
import { useDispatch } from "react-redux"

import todos from '../reducers/todos'

import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))        
    }

    return (
        <div>
            <Box>
                <Input
                    placeholder="What's cooking?"
                    type="text"
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <Button
                    variant="contained"
                    disabled={!input}
                    color="primary"
                    onClick={onAddTodo}>
                        Add todo
                </Button>
            </Box>
        </div>
    )
}

export default AddTodo