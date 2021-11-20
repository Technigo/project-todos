import React from 'react'
import tasks from 'reducers/tasks'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const CompleteAllbtn = styled.button`
    background: rgb(255, 255, 255, 0.7);
    color: rgb(53, 56, 75);
    border: none;
    font-size: 1.1em;
    height: 3.5em;
    border-radius: 45px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    outline: none;
    z-index: 30;
    font-family: 'Shippori Antique', sans-serif;
    transition: all 0.3s ease 0s;
    margin: 2em 0;
    padding: 0 0.8em;

    &:hover {
    background-color: rgb(57, 230, 0);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-2px);
  }

  &:active {
    background-color: rgb(57, 230, 0);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: black;
    transform: translateY(7px);
  }
`

const CompleteAllTask = ({ items }) => {
    const dispatch = useDispatch();

    const onCompleteAllTask = (items) => {
        setTimeout(() => dispatch(tasks.actions.completeAllTask(items)));
    }

    return (
        <CompleteAllbtn onClick={() => onCompleteAllTask(items)}> All done<span role='img' aria-label='img'>💯</span>
        </CompleteAllbtn>

    )
}

export default CompleteAllTask
