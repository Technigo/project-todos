import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

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

    /* @media ${devices.mobile} {
        width: ${pixeldimensions.mobile}
    }
    @media ${devices.tablet} {
        width: ${pixeldimensions.tablet}
    }
    @media ${devices.desktop} {
        width: ${pixeldimensions.desktop}
    } */
`

const Form = () => {

    const [newTask, setTask] = useState()
    const dispatch = useDispatch()

    const taskArray = useSelector((store) => store.tasks.items.length)

    const newTaskObject = {
        id: taskArray + 1,
        title: newTask,
        status: false
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(tasks.actions.addTask(newTaskObject))
        setTask('')

        // { method: 'POST', headers: { 'Content-Type': 'application/json',}, body: JSON.stringify({ message: newThought }) }
        // ).then((res) => res.json()).then((data) => setThoughts([data, ...thoughts])).then(setNewThought(''))
    }

    return ( 
        
        
        <div className="task-wrapper">

            <InputField onSubmit={onFormSubmit}> 
                <label htmlFor="newTask">What do you need to get done?</label>
                <input  
                value={newTask || ''} 
                onChange={(e) => setTask(e.target.value)}
                id={taskArray+1}
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