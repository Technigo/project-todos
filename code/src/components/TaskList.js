import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import bin from 'assets/bin.svg'

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
                <DeleteButton onClick={() => onRemoveTaskButtonClick(singleTask.id)} type="button"><DeleteIcon src={bin} alt="" /></DeleteButton>
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
  margin: 5% auto;
  position: relative;
`
const EachTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Quicksand', serif;


  input[type=checkbox] {
    left: 0;
    margin-right: 20px;
    position: absolute;
  }

  label {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 8px;
  }

 `

const DeleteButton = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  `

const DeleteIcon = styled.img`
  width: 1.3rem;

  &:hover {
      transform: scale(1.2);
    }
  `
// const TaskCheckbox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 10px;
// `;

