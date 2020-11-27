import React from 'react'
import { useSelector } from 'react-redux'

import { Image } from '../Styles/Image'

import { Heading, SubHeading } from '../Styles/Texts'
import { Wrapper } from '../library/Containers'

export const Header = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((item) => item.done)

  return (
    <>
      <Heading>This is a very important todo-list</Heading>
      {completedTasks.length<items.length ? <SubHeading>You have completed {completedTasks.length} out of {items.length} tasks</SubHeading>
      : <Wrapper><SubHeading>You have done all your tasks! Grab an icecream and celebrate!</SubHeading>
      <Image src={'./lottieanimation.gif'} alt='animation of Icecream'/></Wrapper>}
    </>
  )
}
