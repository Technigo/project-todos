import React, { useEffect } from "react";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';
import { AddNewTaskBtn } from 'Buttons'
import EmptyState from "EmptyState";


const Completed = () => {

    
    const lists = JSON.parse(localStorage.getItem('reduxState'));  
    
    let completedList = []
    
    if (lists) {
        completedList = lists.tasks.list.filter(item => item.complete);
    }
    

    
    return (
        <div className="container">
            <Header header='✅ Complete' />
            <ul>
              {completedList.length > 0 && <>
                {completedList.map(item => <Task task = {item} key={uniqid()}/>)}
              </>
              }
              {completedList.length === 0 && <EmptyState text = 'Complete your tasks and see them here'/>}
            </ul>
            <AddNewTaskBtn />

        </div>
    )
}

export default Completed