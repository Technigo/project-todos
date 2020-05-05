import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddTaskForm } from 'components/AddTaskForm'
import { Task } from 'components/Task'

export const ListSummary = () => {

    const list = useSelector(store => store.todolist.list)
    const numDone =list.items.filter(item => item.done).length

    return <section>
        <h4>
            {numDone} of {list.items.length} tasks complete</h4>
        </section>
}
