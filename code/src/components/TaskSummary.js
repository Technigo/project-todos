import React, { useState } from 'react'
import { useSelector } from 'react-redux' //because we will have a action
import styled from 'styled-components/macro'

export const TaskSummary = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const doMoreTasks = tasks.filter(task => task.completed)

  const [showShoppingList, setShowShoppingList] = useState(false)
  const completedItems = tasks.filter(task => task.completed)

  return (
    <>
      <Completed>Completed {doMoreTasks.length} task{""}{doMoreTasks.length === 1 ? "" : "s"}
        <span onClick={() => setShowShoppingList(!showShoppingList)}> ➕ </span>
      </Completed>

      {showShoppingList && (
        <ol>
          {completedItems.map(task => (
            <ListItem key={task.id}>{task.text}</ListItem>
          ))}
        </ol>
      )
      }
    </>
  )
}

const Completed = styled.section`
  background: #df993e;
  color: #343434;
  padding: 20px;
  font-weight: 600;
`
const ListItem = styled.li`
  color: #343434;
  padding: 10px;
  font-weight: 600;

`

