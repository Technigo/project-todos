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
  const onIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
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
              <div key={singleTask.id}>{singleTask.name}
                <label htmlFor="done">Done
                  <input
                    type="checkbox"
                    id="done"
                    checked={singleTask.isDone}
                    onChange={() => onIsDoneToggle(singleTask.id)} />
                </label>
                <Button onClick={() => onRemoveTaskButtonClick(singleTask.id)} type="button">remove</Button>
              </div>
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
  justify-content: center;
  align-items: center;
  border: 2px solid #B7B78A;
  padding: 0px 0px; 
  margin-right: 35%;
  margin-left: 35%;
  border-radius: 20px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
`
const Button = styled.button`
`