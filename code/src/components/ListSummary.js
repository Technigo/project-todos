import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddTaskForm } from 'components/AddTaskForm'
import { Task } from 'components/Task'

export const ListSummary = () => {

    const list = useSelector(store => store.todolist.list)
    const numDone =list.items.filter(item => item.done).length

    return <section>
        <h2>
            {numDone}/{list.items.length} tasks complete</h2>
    </section>
}
