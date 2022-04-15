import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch} from 'react-redux'
import {todos} from '../reducers/todos'
import moment from "moment";
import { Link } from 'react-router-dom';

const Pageheader = styled.header`
    background-color: #e9ecef;
    width:90%;
    max-width: 500px;
    padding:20px;
    border-radius: 1rem;
    
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

export const Header = () => {
    const items = useSelector(store => store.todos.items)
    console.log('items', items)
    const uncompletedTasks = items.filter(item => item.isComplete === false)
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
                <Text>Tasks done: {uncompletedTasks.length}/{items.length}</Text>
            </Headerdiv>
            <Headerdiv>
                <Clearbutton onClick={onDeleteAll}>Clear all</Clearbutton>
                <button onClick={onCompleteAll}>Complete all</button>
            </Headerdiv>
        </Pageheader>
    )
}