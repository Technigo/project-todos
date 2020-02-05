import React from 'react'
import { useSelector } from 'react-redux'
import { ClearButton } from './ClearButton'
import { Item } from './Item'
import './tasklist.css'

export const TaskList = () => {
    const items = useSelector((state) => state.tasks.items)
    return (
        <>
            {!items.length === 0 && (
                <div className="no-tasks">
                    <h2>Seems like you have no tasks at this moment...</h2>
                </div>
            )}
            {items.length >= 1 && (
                <div className="list-container">
                    <ul>
                        {items.map((item) => {
                            return <Item
                                key={item.id}
                                item={item} />
                        })}
                    </ul>
                    <ClearButton />
                </div>
            )}
        </>
    )
}
