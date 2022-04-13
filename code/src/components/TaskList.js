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
    const onTaskToggle = (id) => {
        dispatch(tasks.actions.toggleTask(id));
    //     console.log(onTaskToggle)
    };

    const onDelete = (taskIndex) => {
        dispatch(tasks.actions.deleteTask(taskIndex));
        // console.log(onDelete)
    };

    const onRemoveAll = () => {
        dispatch(tasks.actions.removeAll())
    }

    return (
        <section> 
            {taskList.map((task) => (
                <TaskStyling key={task.id}>
                    <h2>{task.text}</h2>
                    <label>
                        completed:
                        <input 
                            type='checkbox' 
                            checked={task.isComplete}
                            onChange={()=>onTaskToggle(task.id)} />
                    </label>
                    <DeleteButton onClick={()=> onDelete(task.id)}>
                        <span role='img' aria-label='delete'>❌</span>    
                    </DeleteButton>                
                </TaskStyling>
            ))}
            <button onClick={onRemoveAll}>clear list</button>
        </section>
    )
};

export default TaskList;
