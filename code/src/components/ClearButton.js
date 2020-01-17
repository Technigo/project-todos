import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import styled from 'styled-components'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <ButtonWrapper>
      <Clear type="button" onClick={() => dispatch(fridge.actions.removeAll())}>
        Clear all
      </Clear>
    </ButtonWrapper>
  )
}

const Clear = styled.button`
  box-shadow: 1px 1px 5px black;
  border: none;
  border-radius: 5px;
  background-color: #433e3f;
  color: rgb(209, 198, 235);
  width: 60px;
  height: 25px;
  font-size: 10px;
  margin: 0px 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
