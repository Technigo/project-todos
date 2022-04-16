import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';
import styled from "styled-components";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const AllTask = () => {


    const list = JSON.parse(localStorage.getItem('item'));
    const taskList = useSelector(state => state.tasks.list);

    useEffect(() => {
        window.JSON.parse(localStorage.getItem('item'))

    },[taskList])

   

  
        return (
        <div className='container'>
            <Header header='📝 All tasks' />

            <AllTasks>
                {list ? list.map(item => {
                
                return <Task key={uniqid()} task = {item} />
                
                }) : []}
            </AllTasks>
        </div>
    )
}

export default AllTask