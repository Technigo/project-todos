import React, { useState, useEffect, forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

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
const Input = styled.input`
  /* flex-grow: 1; */
  margin-top: 20px;
  height: 60px;
  border: 0;
  font-size: 5rem;
`

export const TodoItem = () => {
  const [dueDate, setDueDate] = useState(new Date())
  const [item, setItem] = useState({})
  const selectedItem = useSelector(store => store.todos.selectedItem)
  const dispatch = useDispatch()

  useEffect(() => {
    setItem(selectedItem)
    console.log(selectedItem)
    selectedItem.dueDate ? setDueDate(selectedItem.dueDate) : setDueDate(new Date())
  }, [selectedItem])

  const DatePickerButton = forwardRef(({ value, onClick }, ref) => (
    <button className='example-custom-input' onClick={onClick} ref={ref}>
      {value}
    </button>
  ))

  const onCloseClick = () => {
    dispatch(todos.actions.saveSelectedItem(item))
    dispatch(todos.actions.removeSelectedItem())
  }

  const onChangeText = e => {
    setItem({ ...item, text: e.target.value })
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onChangeText(e)
      e.target.blur()
    }
  }

  const onChangeDate = date => {
    setDueDate(date)
    setItem({ ...item, dueDate: dueDate })
  }

  return (
    <>
      {selectedItem && (
        <ModalWrapper>
          <ModalContent>
            <Input type='text' value={item.text} onChange={onChangeText} onKeyDown={onKeyDown} />
            <div>
              <DatePicker
                selected={dueDate}
                onChange={date => onChangeDate(date)}
                timeInputLabel='Time:'
                dateFormat='yyyy-mm-dd (hh:mm)'
                showTimeInput
                customInput={<DatePickerButton />}
              />
            </div>
            <CloseButton onClick={onCloseClick}>Close</CloseButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}
