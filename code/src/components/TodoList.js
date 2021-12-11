import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"

// styling
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <section>
            {items.map(item => (
                <div className="flex-item" key={item.id}>
                    <Checkbox
                        color='secondary'
                        checked={item.isComplete}
                        onChange={() => onToggleTodo(item.id)}
                        sx={{
                            '& .MuiSvgIcon-root': { 
                            fontSize: 28,
                        },
                        }}
                    />
                    <div className='grid-item'>
                        <p>{item.text}</p>
                    </div>
                    <IconButton
                        color='secondary'
                        aria-label='delete'
                        onClick={() => onDeleteTodo(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => onDeleteTodo(item.id)}>
                            Delete
                    </Button> */}
                </div>
            ))}
        </section>
    )
}

export default TodoList