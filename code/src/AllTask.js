import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "Header";
import Task from "Task";
import { CompleteAllBtn, AddNewTaskBtn } from "Buttons";
import tasks from "reducers/tasks";
import uniqid from 'uniqid';
import styled from "styled-components";
import EmptyState from "EmptyState";
import { set } from "date-fns";
import { ca } from "date-fns/locale";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`



const AllTask = () => {
    let taskList = useSelector(state => state.tasks.list);
    //const [filter, setFilter] = useState(useSelector(state => state.tasks.list));

    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const onClickCompleteAll = () => {
        dispatch(tasks.actions.completeAllItems())
    }



    switch (value) {
        case 'All':
            const all = taskList.sort((a,b) => a < b ? 1 : -1);
            taskList = all;
            break;
        case 'Uncomplete':
            const uncompleteList = taskList.filter(item => !item.complete);
            taskList = uncompleteList;
            break;
        case 'Complete':
            const completeList = taskList.filter(item => item.complete);
            taskList = completeList;
            break;
        case 'Oldest':
            taskList = [...taskList];
            break;
        case '🏠 Home':
            const homeList = taskList.filter(item => item.category === '🏠 Home');
            taskList = homeList;
        case '👩‍💻 Work':
            const workList = taskList.filter(item => item.category === '👩‍💻 Work');
            taskList = workList;
        case '👩🏼‍🤝‍👩🏻 Meeting':
            const meetingList = taskList.filter(item => item.category === '👩🏼‍🤝‍👩🏻 Meeting');
            taskList = meetingList;
        case '❤️ Personal':
            const personalList = taskList.filter(item => item.category === '❤️ Personal');
            taskList = personalList;
      
    }


    return (
        <div className='container'>
            <Header header='📝 All tasks' />

            <AllTasks>
                {(taskList && taskList.length > 0 )  &&
                    <>
                    <CompleteAllBtn completeAll={onClickCompleteAll} />
                    <select value={value} onChange={(e) => setValue(e.target.value)} >
                        <option value='All'>All</option>
                        <option value='Latest'>Latest</option>
                        <option value='Uncomplete'>Uncomplete</option>
                        <option value='Complete'>Complete</option>
                        <option value='🏠 Home'>🏠 Home</option>
                        <option value='👩‍💻 Work'>👩‍💻 Work</option>
                        <option value='👩🏼‍🤝‍👩🏻 Meeting'>👩🏼‍🤝‍👩🏻 Meeting</option>
                        <option value='❤️ Personal'>❤️ Personal</option>


                    </select>
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