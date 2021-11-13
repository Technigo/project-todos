import React from "react";
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { todo } from "Reducers/todo";
import styled from 'styled-components';

const HeaderContainer = styled.section`
    color: white;
    background: #E5DCCD;
    box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    background: rgb(0 0 0 / 50%);
`
const LeftContainer = styled.div`
    background: rgb(0 0 0 / 50%);
    padding: 0 1rem;
    `
const RigthContainer = styled.div`
    background: rgb(0 0 0 / 50%);
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    `
const ButtonHeader = styled.button`
    background: green;
    padding: 10px;
    margin: 10px;
    `

export const Header = () => {
    const dispatch = useDispatch();
    const date = useSelector(store => store.todo.today)
    const tasks = useSelector(store => store.todo.tasks)

    const handleOnClickClear = () => {
        dispatch(todo.actions.clearAllTasks())
    }

    const handleOnClickComplete = () => {
        dispatch(todo.actions.completeAllTasks())
    }


    return (
        <HeaderContainer>
            <LeftContainer>
                <h1>My day: Todo List</h1>
                <h1>{moment(date).format('dddd')}, {moment(date).format('ll')}</h1>
            </LeftContainer>
            <RigthContainer>
                <h1>{tasks.length} tasks</h1>
                <ButtonHeader onClick={handleOnClickClear}>Clear All</ButtonHeader>
                <ButtonHeader onClick={handleOnClickComplete}>Complete all</ButtonHeader>
            </RigthContainer>
        </HeaderContainer>
    )

}