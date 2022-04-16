import React from 'react'
import { useSelector } from 'react-redux'

const CompletedTasks = () => {

const allTasks = useSelector(store => store.tasks.items)
const tasksDone = allTasks.filter(singleTask => singleTask.isDone)

return (
<>
<p>{tasksDone.length} / {allTasks.length}</p>
</>
)
}

export default CompletedTasks;
