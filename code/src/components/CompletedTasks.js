import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'

const CompletedSection = styled.section`
    background-color: beige;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
`
const TaskSection = styled.section`
    display: flex;
    align-items: center;
`

export const CompletedTasks = () => {

    const dispatch = useDispatch()

    const completedTasks = useSelector((store => store.tasks.completedTasks))
    const taskList = useSelector((store => store.tasks.taskList))
    
    // const displayCompleted = () => {
    //         const moveCompletedTasks = taskList.map(task => {
    //             if (task.isDone === true) {
    //                 console.log('hurra')
    //                 // return {
    //                 //     ...task
    //                 // }
           
    //             } else {
    //                     console.log('not true')
    //             }
    //         })

            // store.completedTasks = moveCompletedTasks
    // }

    return (
        <CompletedSection>
                <p>Completed tasks:</p>
                {completedTasks.map(task => (
                    <div key={uniqid}>
                        <TaskSection>
                            <input 
                                type='checkbox'
                                // checked={task.IsDone}
                                // onChange={() => dispatch(tasks.actions.toggleIsDone(task.id))} 
                            />
                            <p>{task.taskText}</p>
                        </TaskSection>
                    </div>
))}
        </CompletedSection>
    )
}
