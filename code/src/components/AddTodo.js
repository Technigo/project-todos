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
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: '25px',
                    width: '100%'
                }}
            >
                <Input
                    placeholder="What's cooking?"
                    color='secondary'
                    sx={{ width: '70%' }}
                    type="text"
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <Button
                    variant="contained"
                    disabled={!input}
                    color="secondary"
                    style={{ verticalAlign: 'initial', padding: '3px 16px', minWidth: '110px'
                }}
                    onClick={onAddTodo}>
                        Add todo
                </Button>
            </Box>
        </div>
    )
}

export default AddTodo