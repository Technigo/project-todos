import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Completed from 'components/Completed'

import taskList from 'reducers/tasks'


const StartPage = () => {

    const tasksList = useSelector((todos) => todos.tasks.items)
    const dispatch = useDispatch()


    const onTaskToggle = (taskId) => {
        dispatch(taskList.actions.toggleItem(taskId))
    }

    const onDeleteClick = (index) => {
        dispatch(taskList.actions.deleteItem(index))
    }

    return (
        <section>
            


            <img src="./assets/woman-long-list.jpg" alt="illustration created by storyset, www.freepik.com" width="150px"/>
            <h1>Todo list will be here</h1> 

            
        <Completed />
            
            
            {tasksList.map(taskItem => (

                <article>
                    <h2>{taskItem.name}</h2>
                    
                    <label>
                    {taskItem.text}
                    <input 
                    type="checkbox" 
                    checked={taskItem.isDone} 
                    onChange={() => onTaskToggle(taskItem.id)} />
                    </label>

                    <button onClick={() => onDeleteClick()} className="btn">
                        Delete
                    </button>

                </article>

            ))}
            
            </section>

    )

}

export default StartPage