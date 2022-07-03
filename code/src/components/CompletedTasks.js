import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CompletedTasks = () => {

const allTasks = useSelector(store => store.tasks.items)
const tasksDone = allTasks.filter(singleTask => singleTask.isDone)

return (
<>
<TaskCount>{tasksDone.length} / {allTasks.length} done</TaskCount>
</>
)
}

export default CompletedTasks;

const TaskCount = styled.p`
padding-top: 0.5rem;
font-size: 1rem;
display: flex;
`