import React from "react";
import { useNavigate } from "react-router-dom";
import trashIcon from './img/trash.svg'
import leftBtn from './img/leftBtn.svg'
import { useDispatch } from "react-redux";
import tasks from "reducers/tasks";
import styled from "styled-components";
import { IconButton } from "AddTaskStyle";


const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 0;


`

const PageTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 700;


`

const Header = ( {header} ) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onBackBtnClick = () => {
        navigate('/');
    }
   
    const deleteItem = () => {
        dispatch(tasks.actions.deleteAllItem());
    }


   

    return <HeaderContainer>
        <IconButton type="button" onClick={onBackBtnClick}>
            <img src={leftBtn} alt='left arrow icon' />
        </IconButton>
        <PageTitle>{header}</PageTitle>
        <IconButton onClick={deleteItem} type="button">
            <img src={trashIcon} alt='trash icon' />
        </IconButton>
    </HeaderContainer>
}

export default Header