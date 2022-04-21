import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "Header";
import Task from "Task";
import { CompleteAllBtn, AddNewTaskBtn } from "Buttons";
import tasks from "reducers/tasks";
import uniqid from 'uniqid';
import styled from "styled-components";
import EmptyState from "EmptyState";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`



const AllTask = () => {


    const taskList = useSelector(state => state.tasks.list);



    const dispatch = useDispatch();

    const onClickCompleteAll = () => {
        dispatch(tasks.actions.completeAllItems())
    }


    return (
        <div className='container'>
            <Header header='📝 All tasks' />

            <AllTasks>
                {(taskList && taskList.length > 0 )  &&
                    <>
                    <CompleteAllBtn completeAll={onClickCompleteAll} />
                    { taskList.map(item => {
                    
                    return <Task key={uniqid()} task = {item} />
                    
                    })}          
                    </>
                
                } 
                {(!taskList ||taskList.length === 0 ) && <EmptyState text='Add new tasks and see them here' />}

            </AllTasks>
            <AddNewTaskBtn />
        </div>
    )
}

export default AllTask