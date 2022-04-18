import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch} from 'react-redux'
import {todos} from '../reducers/todos'
import moment from "moment";
import { Link } from 'react-router-dom';

const Pageheader = styled.header`
    width:90%;
    max-width: 500px;
    padding:20px; 
`
const Headerdiv = styled.div`
    
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`
    margin:0;
    padding:0;
`
const Text = styled.p`
    margin:0;
    padding:0;
`
const Clearbutton = styled.button`
`

const TaskDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const Task = styled.div`
    display:flex;
    align-items:center;
`
const Number = styled.p`
    font-size: 48px;
`

const TaskText = styled.p`
    font-size:24px;
`



export const Header = () => {
    const items = useSelector(store => store.todos.items)
    const dispatch = useDispatch()
    const onDeleteAll = () => {
        dispatch(todos.actions.deleteAll())
    }
    const onCompleteAll = () => {
        dispatch(todos.actions.completeAll())
    }
    const date = moment().format('LL')
    return(
        <Pageheader>
            <Headerdiv>
                <Title>TodoApp</Title>
                <Link to={'/create_todo'}>
                    ➕
                </Link>
            </Headerdiv>
            <Headerdiv>
                <Text>{date}</Text>
            </Headerdiv>
            <Headerdiv>
                <Clearbutton onClick={onDeleteAll}>Clear all</Clearbutton>
                <button onClick={onCompleteAll}>Complete all</button>
            </Headerdiv>
        </Pageheader>
    )
}