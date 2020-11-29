import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {todos} from 'reducer/todos'
import moment from 'moment'


const ItemContainer = styled.div`
    margin-bottom: 15px;
    
`
const TaskContainer = styled.li`

    width: 100%;
    height: 18px;
    display: flex;
    align-items: center;
    padding: 26px;
    margin-bottom: 5px;
    font-size: 16px;
    color: #3f3f3f;
    background-color: #E1C9FD;
    border-radius: 45px;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    justify-content: space-between;

    ::first-letter {
        text-transform: uppercase;
    } // Funkar inte på flex
    
`

const Task = styled.div`
    display: flex;

`

const RemoveButton = styled.button`
    background-color: Transparent;
    border: none;  
    color: #fff;
    font-size: 50px;
`
const TimeStamp = styled.p`
    font-size: 12px;
    margin: 0;
    padding-left: 26px;
    color: #a3a3a3;
`

const CheckboxContainer = styled.label`
    display: flex;  
    align-items: center;
    margin-right: 30px;

`
const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 20px;
    width: 20px;
    padding: 0;
    margin: 0;
`

const CustomCheckbox = styled.span`
    margin-right: 10px;
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: ${props => props.checked ? "#7F2AEC" : "#fff"};

    border-radius: 50%;
    cursor: pointer;
    opacity:1;
    :hover {
        background-color: ${props => props.checked ? "#7F2AEC" : "#D1C4F6"};
    }
    :after {
        content:"";
        position: absolute;
        width: 4px;
        height: 9px;
        border: solid #fff;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        top: 3px;
        left: 6px;
        display: ${props => props.checked ? "block" : "none"};
    }
`


export const Item = ({ item }) => {
    const dispatch = useDispatch();
    const check = () => {
        dispatch(todos.actions.markComplete(item.id))
    }

    return (
            <ItemContainer>
                <TaskContainer>
                    <Task>
                        <CheckboxContainer>
                            <Checkbox 
                                type="checkbox"
                                checked={item.isComplete}
                                onChange={check}
                            >
                            </Checkbox>
                            <CustomCheckbox checked={item.isComplete}></CustomCheckbox>
                        </CheckboxContainer>
                        {item.text}
                    </Task>
                    <RemoveButton onClick={() => dispatch(todos.actions.removeOne(item.id))}>-</RemoveButton>
                   
                </TaskContainer>
                <TimeStamp>{moment(item.created).startOf().fromNow()}</TimeStamp>
            </ItemContainer>
    )
}