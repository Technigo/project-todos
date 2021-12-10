import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"

// styling
import Button from '@mui/material/Button'
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
                        checked={item.isComplete}
                        onChange={() => onToggleTodo(item.id)}
                        sx={{
                            '& .MuiSvgIcon-root': { 
                            fontSize: 28,
                        },
                        }}
                        />
                    <p>{item.text}</p>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => onDeleteTodo(item.id)}>
                            Delete
                    </Button>
                </div>
            ))}
        </section>
    )
}

export default TodoList