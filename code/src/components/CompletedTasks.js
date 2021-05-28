import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const CompletedTasks = () => {

    const completedTasks = useSelector((store => store.tasks.completedTasks))

    return (
        <>    
            {completedTasks.length > 0 &&  
                <CompletedSection>
                    <CompletedTitle>Completed tasks:</CompletedTitle>
                    {completedTasks.map(task => (
                        <div key={task.id}>
                            <TaskSection>
                                <CompletedText>{task.taskText}</CompletedText>
                            </TaskSection>
                        </div>
                    ))}
                    </CompletedSection>
                } 
            </>
    )
}

const CompletedSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px;
    // background-color: pink;
    @media (min-width: 768px) {
        margin: 30px 140px 20px 140px;
    }
    @media (min-width: 992px) {
        width: 600px; 
    }
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
const TaskSection = styled.section`
    display: flex;
    align-items: center;
`
