/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import Header from './Header'
import { InnerWrapper, Outerwrapper } from './Styling'
import NewTask from './NewTask'

const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();

  const onIsTaskDone = (id) => {
    dispatch(tasks.actions.markTaskAsDone(id))
  }
  const onRemoveTaskClick = (task) => {
    dispatch(tasks.actions.removeTask(task))
  }
  return (
    <Outerwrapper>
      <Header />
      <InnerWrapper>
        {allTasks.map((singleTask, index) => {
          return (
            <Content key={singleTask.id}>
              <SingleTask>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={singleTask.isDone}
                  onChange={() => onIsTaskDone(singleTask.id)} />
                <label>
                  <TasklistText>{singleTask.title}</TasklistText>
                </label>
              </SingleTask>
              <RemoveTaskButton type="button" onClick={() => onRemoveTaskClick(index)}>X
              </RemoveTaskButton>
            </Content>
          )
        })}
        <NewTask />
      </InnerWrapper>
    </Outerwrapper>
  )
}
export default Tasks;

const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 25px;
`
const SingleTask = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
align-content: flex-end;
`

const TasklistText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 13px;
text-transform: uppercase ;
padding-left: 5px;

@media (min-width: 668px) and (max-width: 1024px) {
   font-size: 15px;
  }
  @media (min-width: 1025px) {
  font-size: 17px;
  }
`

const RemoveTaskButton = styled.button`
background: none;
border: none;
font-size: 15px;
font-weight: 700;
`
