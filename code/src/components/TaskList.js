import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'
import styled from 'styled-components/macro'


export const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.items)


  return (
    <List>
      {allTasks.map((item) => (
        <Todo key={item.id} item={item} />
      ))}

    </List>
  )
}

const List = styled.ul`
 
  color: blue;
  background-color: grey;
  align-items: center;
  justify-content: center;
  padding-top: 10px; 
  padding-bottom: 10px;
  
`

//<List key={task.id}> {task.complete} {task.text} </List>