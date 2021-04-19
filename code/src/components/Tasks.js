import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import { List } from './styled components/TasksStyling'

export const Tasks = () => {
    //TODO - fetch all todos from the store. When we have set up our store we can import useSelector (line 2) and fetch the data.
    const items = useSelector((store) => store.tasks.items)
    //good practice to call the variable the same as in the store --> items 

    return (
        <List>
            {items.map((task) => (
                <Task key={task.id} task={task} completed={task.completed} />
            ))}
        </List>
    )
}