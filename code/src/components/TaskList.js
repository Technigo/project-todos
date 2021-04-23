import React from 'react'
import { useSelector } from 'react-redux'

import { Task } from './Task'
import { List } from './styled components/TasksStyling'

const TaskList = () => {
    const items = useSelector((store) => store.tasks.items)

    return (
        <List>
            {items.map((task) => (
                <Task key={task.id} task={task} completed={task.completed} />
            ))}
        </List>
    )
}

export default TaskList