import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Task} from './Task'
import {NewTask} from './NewTask'
import {tasks} from '../reducers/tasks'


const Tasklist = () => {
    const Listedtasks = useSelector(store => store.tasks.items)
    const dispatch = useDispatch()
    const completedTasks = Listedtasks.filter(task => task.complete === true)
    

    return(
        <section>
            <p>Completed: {completedTasks.length}/{Listedtasks.length}</p>
            {Listedtasks.map(task => {
                return (
                    <div key={task.id}>
                        <Task text={task.text}  complete={task.complete} task={task}/>
                        <button onClick={()=>dispatch(tasks.actions.removeThisTask(task))}>Remove</button>
                        {console.log(task.text)}
                    </div>
                    )
            })}
           
           <NewTask />
           <button onClick={()=>dispatch(tasks.actions.clearTasks())}>Clear All</button>
        </section>
    )
}

export default Tasklist
