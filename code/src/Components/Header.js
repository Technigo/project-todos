import React from 'react'
import { useSelector } from 'react-redux'

import { Heading, SubHeading } from '../Styles/Texts'

import { tasks } from '../Reducers/tasks'

export const Header = () => {

    /* const items = useSelector((store) => store.tasks.items)
    const completedTasks = items
    console.log(completedTasks) */

    return (
        <>
    <Heading>This is a very important todo-list</Heading>
    <SubHeading>You have completed {/* {completedTasks} */}</SubHeading>
    </>
    )
}