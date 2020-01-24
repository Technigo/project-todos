import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'
import { Trash } from '../icons/Trash'

export const Task = (props) => {
    const dispatch = useDispatch()
    const handleCheckboxClick = () => {
        dispatch(todos.actions.toggleCompleted(props.item.id))
    }
    const handleRemoveTaskTrashButton = () => {
        dispatch(todos.actions.removeTask(props.item.id))
    }

    return (
        <StyledList>
            <Wrapper>
                <CheckBox>
                    <Input
                        type="checkbox"
                        checked={props.item.complete}
                        onChange={handleCheckboxClick} />
                </CheckBox>
                <Text completed={props.item.complete}>
                    {props.item.name}
                </Text>
            </Wrapper>
            <ButtonRemove
                type="button"
                onClick={handleRemoveTaskTrashButton}
            ><Trash /></ButtonRemove>
        </StyledList>
    )
}


const StyledList = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
list-style-position: inside;
border-bottom: 2px solid #d1d1e0;
`;
const Wrapper = styled.div`
display:flex;
flex direction: row;
justify-content: start-left;
margin-left:5%;
`;
const CheckBox = styled.div`
border: transparent;
align-self: center;
display:flex;
justify-content:center;
`;
const Text = styled.h3`
padding-left: 30px;
color: ${props => (props.completed ? "#d1d1e0" : "#7575a3")};
`;
const ButtonRemove = styled.button`
background: transparent;
border: 0;
margin-right:3%;
&:hover {
    stroke: #5d2242;
    cursor: pointer;
  }
`;
const Input = styled.input`
width:25px;
height:25px;
margin:0;
`;




