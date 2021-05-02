import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

const Btn = styled.button`
  width: 95px;
  border-radius: 8px;
  background-color: #ca8a8b;
  color: #ffffff;
  border: none;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 2px 1px 15px rgb(148 124 124 / 68%);

  &:hover {
    background-color: #D6A1A2;
  }
`

const CheckAllBtn = () => {

  const store = useSelector((store) => store.tasks)

  const dispatch = useDispatch()

  const onBtnClick = () => {
    if (store.allChecked) {
      dispatch(tasks.actions.uncheckAll())
    } else if (!store.allChecked) {
      dispatch(tasks.actions.checkAll())
    }
  }

  return(
    <>
      {store.items.length > 0 && (<Btn 
        type="button" 
        onClick={onBtnClick}
      >
        {store.allChecked ? "UNCHECK ALL" : "CHECK ALL"}
      </Btn>)}
    </>
  )
}

export default CheckAllBtn
