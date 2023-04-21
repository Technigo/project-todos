/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const items = useSelector((store) => store.tasks.items)
    const completedTasks = items.filter((task) => task.isChecked);

    const Alldone = () => {
        if (items.length === 0) {
            return ''
        } else if (items.length === completedTasks.length) {
            return `All done ! ${completedTasks.length} / ${items.length}`
        } else {
            return `${completedTasks.length} / ${items.length} done`
        }
    }

    return (
        <p className={items.length < completedTasks.length ? 'complete-todo' : ''}>
            {Alldone()}
        </p>
    )
}

export default Counter;