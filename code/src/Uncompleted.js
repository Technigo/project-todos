import React from "react";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';



const Uncompleted = () => {

    
    const lists = JSON.parse(localStorage.getItem('reduxState'));    
    const unCompleteList = lists.tasks.list.filter(item => !item.complete);

    return (
        <div>
            <Header header='🚨 Uncomplete' />
            <ul>
                {unCompleteList.map(item => <Task task = {item} key={uniqid}/>)}
            </ul>
        </div>
    )
}

export default Uncompleted