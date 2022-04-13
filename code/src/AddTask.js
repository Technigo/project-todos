import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';

import tasks from "reducers/tasks";
import { useNavigate } from "react-router-dom";
import leftBtn from './img/leftBtn.svg'



const AddTask = () => {
    
    const editItem = useSelector(state => state.tasks.editItem);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitNewTask = (e) => {
        e.preventDefault(e)
        dispatch(tasks.actions.addItem({id: uniqid(), text: editItem, complete: true }))
        navigate('/all');
    }

    const onChangeItem = (item) => {
      dispatch(tasks.actions.onChangeItemInput(item))
    }

    const onBackBtnClick = () => {
        navigate('/');
    }

    return (
        <div>
            <button type="button" onClick={onBackBtnClick}>
                <img src={leftBtn} alt='left arrow icon' />
             </button>
            <form onSubmit={(e) => onSubmitNewTask(e)}>
                <input 
                type='text' 
                placeholder="Task title"
                value={editItem}
                onChange={(e) => onChangeItem(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTask;