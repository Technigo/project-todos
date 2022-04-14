import React from 'react'

export const TaskItem = ({task}) => {
    return (
        <li>
            <p>{task.text}</p>
            <div>{task.status}</div>
            <button type="button" onClick={() => {}}>Done</button>
            <button type="button" onClick={() => {}}>Not done</button>

        </li>
    )
}