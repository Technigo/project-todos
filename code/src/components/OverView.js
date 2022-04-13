import React from 'react'
import TaskHeader from './TaskHeader'
import TaskAdd from './TaskAdd'
import TaskList from './TaskList'

const OverView = () => {
    return (
        <div>
            <TaskHeader />
            <TaskAdd />
            <TaskList />
        </div>
    )
}

export default OverView
