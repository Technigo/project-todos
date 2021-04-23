import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

const Btn = styled.button`
  border-radius: 8px;
  background-color: #8B98F9;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
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
