import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card'
import Checkbox from '@material-ui/core/Checkbox'
import Delete from '@material-ui/icons/Delete'


import { tasks } from '../reducers/tasks'

const Box = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
`

const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(false)
  

  return (
    <StyledCard>
      {item.text}
      <div>
        <Checkbox type="checkbox" id="button" name="button" value="button" checked={check} onChange={() =>setCheck(prev => !prev)}/>
        <Box>
          <Delete type="button" onClick={() => { dispatch(tasks.actions.removeItem(item)) }} />
        </Box>
      </div>
    </StyledCard>
  )
}