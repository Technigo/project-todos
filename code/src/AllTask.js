import React from "react";
import { useSelector } from "react-redux";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';


const AllTask = () => {

    const taskList = useSelector(state => state.tasks.list);   
        return (
        <div>
            <Header header='📝 All tasks' />

            <ul>
                {taskList.map(item => {
                
                return <Task key={uniqid()} task = {item} />
                
                })}
            </ul>
        </div>
    )
}

export default AllTask