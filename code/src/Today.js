import React from "react";
import { useSelector, useDispatch } from "react-redux"
import Header from "Header";
import uniqid from 'uniqid';
import Task from "Task";
import tasks from "reducers/tasks";
import {CompleteAllBtn, AddNewTaskBtn} from "Buttons";
import EmptyState from "EmptyState";

import styled from "styled-components";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Today = () => {
    
    const currentDate = new Date().toLocaleDateString();
    const taskList = useSelector(state => state.tasks.list);
 
    let todayList = [];

    if (taskList) {
        todayList = taskList.filter(item => item.date === currentDate);

    }
 
    const dispatch = useDispatch();

    const onClickCompleteAll = () => {
        dispatch(tasks.actions.completeAllItems(todayList))
    }

    return ( 
        <div className="container">
            <Header header='☀️  Today' />
            <AllTasks>
                {todayList.length > 0 && 
                <>
                    <CompleteAllBtn completeAll={onClickCompleteAll} />
                    {todayList.map(item => (  
                        <Task key={uniqid()} task = {item} />
                        
                    )) }
                </>
                 }
                 {todayList.length === 0 && <EmptyState text='Add new taks and see them here' />}
                
            </AllTasks>
            <AddNewTaskBtn />
        </div>
    )
}

export default Today