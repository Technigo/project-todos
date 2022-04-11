import React from 'react';
import Input from './Input';
import { useDispatch } from 'react-redux';



const Task = ({ task }) => {
    return (
        <section>
            <p>{task.text}</p>
            <p>{task.complete}</p>
            <Input />
        </section>
    )
}

export default Task;
