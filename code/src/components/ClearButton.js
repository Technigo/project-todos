import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import styled from 'styled-components'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(fridge.actions.removeAll())}
      >
        clear
      </button>
      <ClearDone
        type="button"
        onClick={() => dispatch(fridge.actions.removeDone())}
      >
        clear done
      </ClearDone>
    </div>
  )
}

const ClearDone = styled.button`
  border: none;
  background-color: #fff;
  color: #000;
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin: 0px 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
