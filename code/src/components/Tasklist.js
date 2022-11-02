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
  return (
    <Outerwrapper>
      <Header />
      <InnerWrapper>
        <section>
          {allTasks.map((singleTask) => {
            return (
              <TasklistSection key={singleTask.id}>

                <input
                  type="checkbox"
                  checked={singleTask.isDone}
                  onChange={() => onIsTaskDone(singleTask.id)} />
                <label>
                  <h2>{singleTask.title}</h2>
                </label>
                <RemoveTaskButton type="button">X
                </RemoveTaskButton>
              </TasklistSection>
            )
          })}
        </section>
      </InnerWrapper>
      <NewTask />
    </Outerwrapper>
  )
}
export default Tasks;

const TasklistSection = styled.section`
display: flex;
flex-direction: row;
align-items: center;
`
const RemoveTaskButton = styled.button`
background: none;
border: none;
font-size: 20px;
font-weight: 700;
`
// eslint-disable-next-line no-lone-blocks
//  <div>
// {allTasks.map((singleTask) => (
//   console.log(singleTask.title)
// ))}
// </div>