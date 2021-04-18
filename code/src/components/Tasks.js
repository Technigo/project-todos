import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import { List } from './styled components/TasksStyling'

export const Tasks = () => {
    //TODO - fetch all todos from the store. When we have set up our store we can import useSelector (line 2) and fetch the data.
    const allTasks = useSelector((store) => store.tasks.items)

    return (
        <List>
            {allTasks.map((task) => (
                <Task key={task.id} task={task} completed={task.completed} />
            ))}
        </List>
    )
}