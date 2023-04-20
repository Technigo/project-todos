import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

const TaskList = () => {
  const dispatch = useDispatch();

  // Get all the tasks currently in the store
  const allTasks = useSelector((store) => store.tasks.items)

  // Toggle function
  const onIsDoneToggle = (taskId) => {
    dispatch(tasks.actions.toggleItem(taskId));
  }

  // Remove items from the store / list
  const onRemoveTaskButtonClick = (taskId) => {
    dispatch(tasks.actions.removeTask(taskId));
  }

  return (
    <>
      <GlobalStyle />
      <section>
        <Wrapper>
          {allTasks.map((singleTask) => {
            return (
              <EachTask key={singleTask.id}>{singleTask.name}
                <label htmlFor={`task_with_id${singleTask.id}`}>
                  <input
                    type="checkbox"
                    id={`task_with_id${singleTask.id}`}
                    value={singleTask.isDone}
                    onChange={() => onIsDoneToggle(singleTask.id)} />
                </label>
                <Button onClick={() => onRemoveTaskButtonClick(singleTask.id)} type="button">🗑️</Button>
              </EachTask>
            )
          })}
        </Wrapper>
      </section>

    </>

  )
}

export default TaskList

/* STYLING FOR TASKLIST */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10% auto;
`
const EachTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`

const Button = styled.button`
  border: none;
  border: transparent;
  background: transparent;
  cursor: pointer;


  &:hover {
      transform: scale(1.2);
    }
  `