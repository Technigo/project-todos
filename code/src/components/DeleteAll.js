import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import todos from "reducers/todos";

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`
const ClearButton = styled.div `
    button {
    background-color: var(--darkblgr);
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: var(--ltgrey);
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    }
`

const DeleteAll = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((store) => store.todos.items)
  const showButton = todoList.length > 1
    const onDeleteAll = () => {
        dispatch(todos.actions.deleteAll())
      }
    

    return (
        <BtnBox>
        <ClearButton>
    {showButton && <button onClick={() => onDeleteAll()}>Clear all</button>}
        </ClearButton>
        </BtnBox>
    )
}

export default DeleteAll