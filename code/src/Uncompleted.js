import React, { useEffect } from "react";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';



const Uncompleted = () => {

    const list = JSON.parse(localStorage.getItem('item'));
    const unCompleteList = list.filter(item => !item.complete);

  

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