import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import { useSelector } from 'react-redux'
// import { TaskList } from 'components/TaskList'
import styled from 'styled-components'


const FormWrapper = styled.div`

width: 80%;
background-color: white;
padding: 2em;

`

const InputField = styled.form`
display: flex;
flex-direction: column;
width: 100%;
gap: 2em;

`

const Label = styled.label`

`

const TextInput = styled.input`
height: 10em;

`

const Submit = styled.button`
height: 4em;
border-radius: 50px;
background-color: white;
color: black;
`

const ListWrapper = styled.div`
width: 80%;
margin: auto;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
gap: 1em;
`


const TaskBar = styled.li`
padding: 2em;
flex: 1;
border: 1px solid gray;
cursor: move;

`


export const FormAndList = () => {

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
        filterTasks()
     }


    const allTasks = useSelector((store) => store.tasks.items)

    const finishedTasks = 
    useSelector((store) => store.tasks.items.filter(t => t.status))

    const unfinishedTasks = 
    useSelector((store) => store.tasks.items.filter(t => !t.status))



    const [taskList, setTaskList] = useState(allTasks)

    
    const filterTasks = (value) => {
                if (value === 'finished') {
                    setTaskList(finishedTasks)
                } else if (value === 'unfinished') {
                    setTaskList(unfinishedTasks)
                } else {
                    setTaskList(allTasks)
                }
                
            }
       
   

    return ( 

        <>
        
        <FormWrapper>

            <InputField onSubmit={onFormSubmit}> 
                <label htmlFor="newTask">What do you need to get done?</label>
                <TextInput  
                value={newTask || ''} 
                onChange={(e) => setTask(e.target.value)}
                id={taskArray.length +1}
                />

                <Submit  
                className="submit-btn" 
                type="submit"> 
                Post task 
                </Submit>
            </InputField>
     
              {/* <TaskList /> */}

        </FormWrapper>


            <ListWrapper>

            {taskList.map((task) => (
                <TaskBar key={task.id} draggable="true" >
                    <label htmlFor={task.id}>{task.title}</label> 
                    <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
                </TaskBar>
            ))}

            </ListWrapper>


                
            <button onClick={() => filterTasks('finished')}>Finished</button>
            <button onClick={() => filterTasks('unfinished')}>Unfinished</button>
            <button onClick={() => filterTasks('all')}>All</button>


            {/* <button onClick={() => setTaskList(finishedTasks)}>Finished</button>
            <button onClick={() => setTaskList(unfinishedTasks)}>Unfinished</button>
            <button onClick={() => setTaskList(allTasks)}>All</button> */}

            <button onClick={() => dispatch(tasks.actions.removeAll())}>REMOVE ALL</button>


            </>
    );
}
 


// export const TaskList = () => {

//     const dispatch = useDispatch()



   
//     return (
//         <>
      


//         </>


//     )
// }
