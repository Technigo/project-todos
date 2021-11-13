import React from "react";
import { useSelector } from 'react-redux'
import { Task } from '../Task/index'
import { Empty } from "Components/Empty";

export const Tasks = () => {
    const tasks = useSelector(store => store.todo.tasks);
    console.log(tasks.length)
    return (
        tasks.length < 1 ? <Empty /> :
            tasks.map(task => {
                return <Task task={task} key={task.id} />
            })
    )
}