import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'

const CompletedSection = styled.section`
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
`
const TaskSection = styled.section`
    display: flex;
    align-items: center;
`

export const CompletedTasks = () => {


    const CompletedSection = styled.section`
        display: flex;
        flex-direction: column;
        margin: 20px;
`

const CompletedTitle = styled.p`
    color: #0F1A84;
    font-size: 18px;
    font-weight: bold;
    margin: 4px 10px 4px 4px;
`

const CompletedText = styled.p`
    color: #0F1A84;
    font-size: 18px;
    margin: 4px 10px 4px 4px;
`

    const dispatch = useDispatch()

    const completedTasks = useSelector((store => store.tasks.completedTasks))
    const taskList = useSelector((store => store.tasks.taskList))


    return (
        <CompletedSection>
                <CompletedTitle>Completed tasks:</CompletedTitle>
                {completedTasks.map(task => (
                    <div key={uniqid}>
                        <TaskSection>
                            {/* <input 
                                type='checkbox'
                            /> */}
                            <CompletedText>{task.taskText}</CompletedText>
                        </TaskSection>
                    </div>
))}
        </CompletedSection>
    )
}
