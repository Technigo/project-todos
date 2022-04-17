import React from "react";
import { useSelector, useDispatch } from "react-redux"
import Header from "Header";
import uniqid from 'uniqid';
import Task from "Task";
import tasks from "reducers/tasks";
import CompleteAllBtn from "CompleteAllBtn";
import EmptyState from "EmptyState";

import styled from "styled-components";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Today = () => {
    
    const currentDate = new Date().toLocaleDateString();
    let lists = JSON.parse(localStorage.getItem('reduxState'));
 
    let todayList = [];
    if (lists) {
        todayList = lists.tasks.list.filter(item => item.date === currentDate);

    }

    const taskList = useSelector(state => state.tasks.list);
 
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
                 {todayList.length === 0 && <EmptyState />}
                
            </AllTasks>
    
        </div>
    )
}

export default Today