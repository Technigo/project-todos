import React from 'react'
import { useSelector} from 'react-redux'

import { TaskInput } from 'components/TaskInput'

import { TaskItem } from './TaskItem'
import { TaskSummery } from './TaskSummery'


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
    <section className="todo-list">
      <TaskInput />
      {list.items.map((item, index) => (
        <TaskItem key= {index} item={item} itemIndex={index}></TaskItem>
      ))}

      <TaskSummery />
    </section>
  )
}
