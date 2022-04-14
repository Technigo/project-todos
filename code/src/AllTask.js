import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';


const AllTask = () => {


    const list = JSON.parse(localStorage.getItem('item'));
    const taskList = useSelector(state => state.tasks.list);

    useEffect(() => {
        window.JSON.parse(localStorage.getItem('item'))

    },[taskList])
   

  
        return (
        <div>
            <Header header='📝 All tasks' />

            <ul>
                {list ? list.map(item => {
                
                return <Task key={uniqid()} task = {item} />
                
                }) : []}
            </ul>
        </div>
    )
}

export default AllTask