import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks';

const TaskItem=styled.article`
border:1px solid grey;
width:80%;
border-radius:2px;
padding:10px;
margin:auto;
margin-top:10px;
position:relative;
background-color:rgb(245,245,245,0.5)
`;

const DeleteButton=styled.button`
position:absolute;
top:10px;
right:10px;
background:none;
border:none;
cursor:pointer;

`



export const TaskList=()=>{
const tasklist=useSelector((store)=>store.tasks.items)
console.log(tasklist)

const dispatch=useDispatch();
const onItemToggle=(itemId)=>{dispatch(tasks.actions.toggleItem(itemId))}
const onTaskDelete=(index)=>{dispatch(tasks.actions.deleteTask(index))}
const deleteAllTasks=()=>{dispatch(tasks.actions.removeAll())}


return (
  <><section>



        {tasklist.map((item, index) => (
            <TaskItem key={item.id}>
                <h2>{item.name}</h2>
                <label>
                    Is done:
                    <input
                        type="checkbox"
                        checked={item.isDone}
                        onChange={() => onItemToggle(item.id)} />
                </label>
                <DeleteButton onClick={() => onTaskDelete(index)}> <span role="img" aria-label="delete"> ❌</span></DeleteButton>

            </TaskItem>
        ))}
        <button className="deleteAll" onClick={() => deleteAllTasks()}>Taking a chillday, remove all todos!</button>
    </section></>
   
)

}