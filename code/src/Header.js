import React from "react";
import { useNavigate } from "react-router-dom";
import trashIcon from './img/trash.svg'
import leftBtn from './img/leftBtn.svg'
import { useDispatch } from "react-redux";
import tasks from "reducers/tasks";

const Header = ( {header} ) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onBackBtnClick = () => {
        navigate('/');
    }
   
    const deleteItem = () => {
        dispatch(tasks.actions.deleteAllItem());
    }
   

    return <header>
        <button type="button" onClick={onBackBtnClick}>
            <img src={leftBtn} alt='left arrow icon' />
        </button>
        <p>{header}</p>
        <button onClick={deleteItem} type="button">
            <img src={trashIcon} alt='trash icon' />
        </button>
    </header>
}

export default Header