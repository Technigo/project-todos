import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notepad } from 'reducers/notepad'
import { RemoveButton } from 'library/Button'
import 'react-dropdown/style.css'
import { CustomCheckBox } from 'components/CustomCheckBox'
import { ButtonEmoji } from 'library/Emoji'
import { ListContainer, DetailContainer } from 'library/Container'
import ToggleDisplay from 'react-toggle-display'
import moment from 'moment'

export const Task = (props) => {

  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const handleDoneButtonClick = () => {
    dispatch(notepad.actions.removeTask(props.item.id))
  }
  const handleCheckBox = () => {
    dispatch(notepad.actions.taskDone(props.item.id))
  }

  const showDetailHandler = () => {
    setShow(!show)
  }


  return (
    <>
      <ListContainer>
        <label>
          <CustomCheckBox
            isChecked={props.item.done}
            onChangeHandler={handleCheckBox} />
        </label>
        <span onClick={showDetailHandler}>{props.item.name} by {moment(props.item.dueDate).format('dddd, MMM Do')}</span>
        <RemoveButton onClick={handleDoneButtonClick}><ButtonEmoji ariaLabel='wastebin'>🗑</ButtonEmoji></RemoveButton>
      </ListContainer>
      <ToggleDisplay show={show}>
        <DetailContainer>
          <span>{props.item.description}</span>
          <span>added {moment(props.item.createdAt).fromNow()}</span>
          <span>Due: {moment(props.item.dueDate).format('MMMM Do YYYY')}</span>
          <span>Category: {props.item.category}</span>
        </DetailContainer>
      </ToggleDisplay>
    </>
  )
}