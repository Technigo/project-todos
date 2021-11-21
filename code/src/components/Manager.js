import React from 'react'
import { useSelector } from 'react-redux'
import CheckAllBtn from './CheckAllBtn'

import ClearAllBtn from './ClearAllBtn'

const Manager = () => {

    const items = useSelector((store) => store.todos.items)
    return (
        <div className="calendar-section">
        <p>{items.length} tasks</p>
        <ClearAllBtn />
        <p>Clear all tasks</p>
        <CheckAllBtn />
    </div>
    )

}

export default Manager