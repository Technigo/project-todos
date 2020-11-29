import React from 'react'
import { useDispatch } from 'react-redux'
import { bag } from 'redux/reducers/bag'

import styled from 'styled-components'
import { CustomCheckbox } from './CustomCheckbox'

const Things = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-left: 500px;
  margin-right: 500px;
`

const Remove = styled.button`
  padding-left: 90px;
  border: none;
  background: none;
  cursor: pointer;
  color: #0E3932;
  font-size: 30px;
  font-weight: bold;
`
const ListText = styled.h4`
  display: flex;
  font-size: 24px;
  justify-content: center;
  aling-items: center;
  padding-left: 80px;
  color: #0E3932;
`


export const HandleThings = (list, packed) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(bag.actions.tooglePacked(list.item.id));
  }
  const handleRemoveButtonClick = () => {
    dispatch(bag.actions.removeItem(list.item.id))
  }

  return (
    <Things>
      <CustomCheckbox 
      type="checkbox"
      unchecked={packed}
      onChange={handleCheckboxClick}/>
      <ListText>{list.item.name}</ListText>
      <Remove 
        type='button' 
        onClick={handleRemoveButtonClick}>
        x
      </Remove>
    </Things>
  )
}