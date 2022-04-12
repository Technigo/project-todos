import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import tasks from "reducers/tasks";

const TaskStyling = styled.article`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px; 
    margin-bottom: 5px;
    position: relative;
`

const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none; 
    cursor: pointer; 
` 


const TaskList = () => {
    const taskList = useSelector((store) => store.tasks.items);
    //console.log(taskList)

    const dispatch = useDispatch();
    const onTaskToggle = (text) => {
        dispatch(tasks.actions.toggleTask(text));
    //     console.log(onTaskToggle)
    };

    const onDelete = (text) => {
        dispatch(tasks.actions.deleteTask(text));
        console.log(onDelete)
    };

    const onRemoveAll = () => {
        dispatch(tasks.actions.removeAll())
    }

    return (
        <section> 
            {taskList.map((task) => (
                <TaskStyling key={task.text}>
                    <h2>{task.text}</h2>
                    <label>
                        completed:
                        <input 
                            type='checkbox' 
                            checked={task.isComplete}
                            onChange={()=>onTaskToggle(task.text)} />
                    </label>
                    <DeleteButton onClick={()=> onDelete(task.text)}>
                        <span role='img' aria-label='delete'>❌</span>    
                    </DeleteButton>                
                </TaskStyling>
            ))}
            <button onClick={onRemoveAll}>clear list</button>
        </section>
    )
};

export default TaskList;
