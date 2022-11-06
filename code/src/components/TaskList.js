/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import trash from 'Assets/trash.png'
import NewTask from 'components/NewTask'

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
      <InnerWrapper>
        {allTasks.map((singleTask, index) => {
          return (
            <Content key={singleTask.id}>
              <input
                type="checkbox"
                id="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsTaskDone(singleTask.id)} />
              <label>
                <TasklistText>{singleTask.title}</TasklistText>
              </label>
              <RemoveTaskButton type="button" onClick={() => onRemoveTaskClick(index)}>
                <Icon
                  className="icon1"
                  src={trash}
                  alt="IconTrash" />
              </RemoveTaskButton>
            </Content>
          )
        })}
        <NewTask />
      </InnerWrapper>
    </Outerwrapper>
  )
}

export default Tasks

const Outerwrapper = styled.section`
  background-color: #5bc0be;
  /* width: 100%;
  height: 80vh; */
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const InnerWrapper = styled.section`
  width: 50%;
  background-color: #409A98;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #2f4858;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
  `

const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 25px;
input[type=checkbox] {
          accent-color: #B4E6E5;
        }
`

const TasklistText = styled.p`
font-family: sans-serif;
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

const Icon = styled.img`

  width: 20px;
  height: 20px;`