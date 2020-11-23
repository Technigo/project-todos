import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Task} from './Task'
import {NewTask} from './NewTask'
import {tasks} from '../reducers/tasks'


const Tasklist = () => {
    const Listedtasks = useSelector(store => store.tasks.items)
    console.log(Listedtasks)
    const dispatch = useDispatch()

    return(
        <section>
            {Listedtasks.map(task => {
                return (
                    <Task text={task.text} key={task.id} complete={task.complete}/>
                    )
            })}
           
           <NewTask />
           <button onClick={()=>dispatch(tasks.actions.removeTask())}>Remove</button>
        </section>
    )
}

export default Tasklist

{/* <p key={task.id}>{task.text}</p> */}