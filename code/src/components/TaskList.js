import React from 'react'
import { useSelector} from 'react-redux'

import { TaskInput } from 'components/TaskInput'

import { TaskItem } from './TaskItem'
import { TaskSummery } from './TaskSummery'

import styled from 'styled-components'

  // TODO - fetch all to-dos from the store
  // Using useSelector: Och vipps så kommer vi åt allti vår store!
/*
    - Show TodoInput / TaskInput
    - Show each TodoItem in the list
    - Show TodoSummary - ( but later move this to HEADER)

With all that set up, you can now start creating components. 
For example, you could make a `TaskList` component which uses `useSelector` 
from the 'react-redux' package to fetch the list of todos and map over them.
*/

export const TaskList = () => {

  const list = useSelector((store) => store.tasks.list)


  return (
    <Container>
      <TaskInput />
      {list.items.map((item, index) => (
        <TaskItem key={index} item={item} itemIndex={index}></TaskItem>
      ))}

      <TaskSummery />
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: whitesmoke;
  padding: 0px 0px 200px 0px;
  color: white;
  margin: 0;
  font-weight: 700;
  border-bottom: 1px solid #EBEEEF;
`;