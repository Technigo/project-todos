import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'
import styled from 'styled-components/macro'


export const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.items)


  return (
    <ListBackground>
      {allTasks.map((item) => (
        <Todo key={item.id} item={item} />
      ))}

    </ListBackground>
  )
}

const ListBackground = styled.div`
 
  color: blue;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 390px;
  //padding: 20px;
  margin-bottom: 100px;
`

