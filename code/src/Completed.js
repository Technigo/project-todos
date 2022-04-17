import React from "react";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';

const Completed = () => {

    const lists = JSON.parse(localStorage.getItem('reduxState'));    
    const completedList = lists.tasks.list.filter(item => item.complete);

    return (
        <div className="container">
            <Header header='✅ Complete' />
            <ul>
            {completedList.map(item => <Task task = {item} key={uniqid()}/>)}
            </ul>
        </div>
    )
}

export default Completed