import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'


import {Task} from './Task'
import {NewTask} from './NewTask'
import {tasks} from '../reducers/tasks'
import {TasksContainer, ClearButton, TopInfo, AddTaskButton} from './StyledComponents'


const Tasklist = () => {
    const Listedtasks = useSelector(store => store.tasks.items)
    const dispatch = useDispatch()
    const completedTasks = Listedtasks.filter(task => task.complete === true)
    const [addTask, setAddTask] = useState(false)
    
    const showInput = () => {
        setAddTask(!addTask)
    }

    return(
        <TasksContainer>
            <TopInfo>
            Completed: {completedTasks.length}/{Listedtasks.length}
                
            <ClearButton onClick={()=>dispatch(tasks.actions.clearTasks())}>
                Clear All
            </ClearButton>
            </TopInfo>
            <NewTask addTask={addTask} setAddTask={setAddTask}/>
            {Listedtasks.map(task => {
                return (
                    <div key={task.id}>
                        <Task text={task.text}  complete={task.complete} task={task}/>
                        {console.log(task.text)}
                    </div>
                    )
            })}

        <AddTaskButton type='submit' onClick={showInput}>{addTask ? "-" : "+"}</AddTaskButton>

           
        </TasksContainer>
    )
}

export default Tasklist
