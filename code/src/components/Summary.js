import React from 'react'
// import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const SummarySection = styled.section`
    background-color: grey;
    margin: 30px 0 0 0;
    height: 100px;
    display: flex;
    justify-content: space-between;
`
const LeftWrapper = styled.section`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const RightWrapper = styled.section`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Summary = () => {

    const taskList = useSelector((store => store.tasks.taskList))
    const amountOfTasks = useSelector((store) => store.tasks.taskList.length)
    // const isDoneArray = useSelector((store) => store.tasks.taskList.map(item => item.isDone))
    // const isDoneArray = useSelector((store) => store.tasks.taskList.filter(item.isDone => isDone: true))
    // const isDoneTrueArray = isDoneArray.filter(item => item.true)
    // console.log(isDoneArray)
    // console.log(isDoneTrueArray)

    // console.log(taskList)

    // const finishedTasks = () => {
    //     // if (taskList.isDone === true

    // }

    return (
        <SummarySection>
            <LeftWrapper>
                <p>Active tasks: {amountOfTasks}  </p>
                {/* <p>Completed tasks: {finishedTasks}  </p> */}
                
           </LeftWrapper>
           <RightWrapper>
               
            </RightWrapper>
        </SummarySection>
    )
}