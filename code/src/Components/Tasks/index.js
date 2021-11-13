import React from "react";
import { useSelector } from 'react-redux'
import { Task } from '../Task/index'

export const Tasks = () => {
    const tasks = useSelector(store => store.todo.tasks);

    return (
        tasks.map(task => {
            return <Task task={task} />
        })
    )
}