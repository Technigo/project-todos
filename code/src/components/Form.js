import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import { useSelector } from 'react-redux'

import styled from 'styled-components'



const pixeldimensions = {
    mobile: '375px',
    tablet: '786px',
    desktop: '1025px',
}

const InputField = styled.form`
display: flex;
flex-direction: column;
position: absolute;
width: 100%;
padding: 2em;
background-color: gray;
gap: 2em;

`

const Form = () => {

    const [newTask, setTask] = useState()
    const dispatch = useDispatch()

    const taskArray = useSelector((store) => store.tasks.items)

    const newTaskObject = {
        id: taskArray.length + 1,
        title: newTask,
        status: false
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(tasks.actions.addTask(newTaskObject))
        setTask('')
     }

    return ( 
        
        
        <div className="form-wrapper">

            <InputField onSubmit={onFormSubmit}> 
                <label htmlFor="newTask">What do you need to get done?</label>
                <input  
                value={newTask || ''} 
                onChange={(e) => setTask(e.target.value)}
                id={taskArray.length +1}
                />

                <button  
                className="submit-btn" 
                type="submit"> 
                Post task 
                </button>
            </InputField>

        {/* {tasks.map(task => (
            <div className="task-card" key={task.id}>
                <p>{task.text}</p>

                <div>
                    <button type="radio"></button>
                </div>
            </div>
        ))

        } */}

        </div>

    );
}
 
export default Form;