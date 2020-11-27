import React from 'react'
import { useSelector } from 'react-redux'

import { Heading, SubHeading } from '../Styles/Texts'

import { tasks } from '../Reducers/tasks'

export const Header = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((item) => item.done)
  console.log(completedTasks.length)

  return (
    <>
      <Heading>This is a very important todo-list</Heading>
      {completedTasks.length<items.length ? <SubHeading>You have completed {completedTasks.length} out of {items.length}</SubHeading>
      : <div><SubHeading>You have done all your tasks! Grab an icecream and celebrate!</SubHeading>
      <img src={'https://assets5.lottiefiles.com/private_files/lf30_OadeVs.json'} alt='animation of Icecream'/></div>}
      
    </>
  )
}
