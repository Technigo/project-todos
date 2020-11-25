import React from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'
import { ClearButton, ButtonContainer } from './styled/clearallbutton'

export const ClearAllButton = (id) => {
  const dispatch = useDispatch()
  
  const handleClearAll = () => dispatch(tasklist.actions.removeAll(id))

  return ( 
    <ButtonContainer>
      <ClearButton onClick={handleClearAll}> Clear All </ClearButton>
    </ButtonContainer>
  )
}