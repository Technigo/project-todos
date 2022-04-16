import React, { useEffect } from "react";
import { useSelector } from "react-redux"
import Header from "Header";
import uniqid from 'uniqid';
import Task from "Task";

import styled from "styled-components";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Today = () => {
    
    const currentDate = new Date().toLocaleDateString();
    let list = JSON.parse(localStorage.getItem('item'));
 
    if(list) {
        list = list.filter(item => item.date === currentDate);
    }

    const taskList = useSelector(state => state.tasks.list);

    useEffect(() => {
        window.JSON.parse(localStorage.getItem('item'))

    },[taskList])
    
    
    return ( 
        <div className="container">
            <Header header='☀️  Today' />
            <AllTasks>
                {list ? list.map(item => {
                    
                    return <Task key={uniqid()} task = {item} />
                    
                    }) : []}
            </AllTasks>
    
        </div>
    )
}

export default Today