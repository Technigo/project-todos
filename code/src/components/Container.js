import React from 'react'

import  TodoList  from 'components/TodoList'
import Todoinput from 'components/TodoInput'

export const Container = () => {
  return (
    <>
      <TodoList/>
      <Todoinput/>
    </>
  )
}