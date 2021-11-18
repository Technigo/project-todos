import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import DatePicker from 'react-datepicker'

import { todos } from '../reducers/todos'

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0.8);
`
const ModalContent = styled.div`
  width: 300px;
  height: 350px;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(244, 244, 244);
  box-shadow: 0 50px 50px 10px rgba(51, 58, 64, 0.2);
  border-radius: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const CloseButton = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: rgb(51, 58, 64, 0.3);
  border-radius: 0 0 20px 20px;
  text-align: center;
  padding: 0.6rem;
  font-size: 1.4rem;
`

export const TodoItem = () => {
  const [startDate, setStartDate] = useState(new Date())
  const item = useSelector(store => store.todos.modalItem)
  const dispatch = useDispatch()

  const onModalClick = () => {
    dispatch(todos.actions.removeModalItem())
  }

  return (
    <>
      {item && (
        <ModalWrapper>
          <ModalContent>
            <p>{item.text}</p>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <CloseButton onClick={onModalClick}>Close</CloseButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}
