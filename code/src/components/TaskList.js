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
const DeleteAllButton=styled.button`

    font-family: 'Oswald', sans-serif;
    width: 150px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: rgb(153, 72, 160);
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin-top:auto;
    margin-top:40px;
  
  
  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }
  
  &:active {
    color:rgb(153, 72, 160);
  }
  
 &:active:after {
    background: transparent;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
 & :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgb(153, 72, 160);
    left: 0;
    top: 0;
    border-radius: 10px;
  }
   @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  }

  

`


const Input=styled.input`
transition: box-shadow .3s;
background: lightgrey;
outline: 2px solid pink;

&:checked{
    box-shadow: inset 0 0 0 20px pink;
    outline: 2px solid pink;}

`


export const TaskList=()=>{
const tasklist=useSelector((store)=>store.tasks.items)


const dispatch=useDispatch();
const onItemToggle=(itemId)=>{dispatch(tasks.actions.toggleItem(itemId))}
const onTaskDelete=(index)=>{dispatch(tasks.actions.deleteTask(index))}
const deleteAllTasks=()=>{dispatch(tasks.actions.removeAll())}


return (
  <><section>



        {tasklist.map((item, index) => (
            <TaskItem key={item.id}>
                <h2>{item.name}</h2>
                   <Input className="input"
                        id="isdone"
                        type="checkbox"
                        checked={item.isDone}
                        onChange={() => onItemToggle(item.id)} />
                <label htmlFor='isdone'>Done!</label>
                <DeleteButton onClick={() => onTaskDelete(index)}> <span role="img" aria-label="delete"> ➖</span></DeleteButton>

            </TaskItem>
        ))}
        <DeleteAllButton className="deleteAll" onClick={() => deleteAllTasks()}>Taking a chillday, remove all todos!</DeleteAllButton>
    </section></>
   
)

}