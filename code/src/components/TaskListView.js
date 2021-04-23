import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'
// import { Task } from 'components/Task'

const ListSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 15px;
`
const TaskSection = styled.section`
    display: flex;
    align-items: center;
`

export const TaskListView = () => {

    const dispatch = useDispatch()
    const taskList = useSelector((store => store.tasks.taskList))

    return (
        <ListSection>
            {taskList.map(task => (
                <div key={task.id}>

                    <TaskSection>
                        <input 
                            type='checkbox'
                            checked={task.IsDone}
                            onChange={() => dispatch(tasks.actions.toggleIsDone(task.id))} 
                            // onChange={() => dispatch(tasks.actions.toggleIsDone({ taskId: task.id }))} 
                        />
                        <p>{task.taskText}</p>
                    </TaskSection>
                </div>
            ))}
        </ListSection>
    )
}