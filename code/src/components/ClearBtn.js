import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const ClearButton = styled.button`
  background-color: pink;
  color: black;
`

const ClearBtn = () => {
  const dispatch = useDispatch()

  const onClickClearAll = () => {
    dispatch(tasks.actions.clearAll())
  }

  return (
    <div>
      <ClearButton onClick={onClickClearAll}>Clear All</ClearButton>
    </div>
  )
}

export default ClearBtn
