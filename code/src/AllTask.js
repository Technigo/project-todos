import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "Header";
import Task from "Task";
import CompleteAllBtn from "CompleteAllBtn";
import tasks from "reducers/tasks";
import uniqid from 'uniqid';
import styled from "styled-components";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const AllTask = () => {


    const list = JSON.parse(localStorage.getItem('reduxState'));
    const taskList = useSelector(state => state.tasks.list);

    const dispatch = useDispatch();

    const onClickCompleteAll = () => {
        dispatch(tasks.actions.completeAllItems())
    }
 

        return (
        <div className='container'>
            <Header header='📝 All tasks' />

            <AllTasks>
                <CompleteAllBtn completeAll={onClickCompleteAll} />
                {list ? list.tasks.list.map(item => {
                
                return <Task key={uniqid()} task = {item} />
                
                }) : []}
            </AllTasks>
        </div>
    )
}

export default AllTask