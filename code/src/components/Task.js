import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notepad } from 'reducers/notepad'
import { RemoveButton } from 'library/Button'
import { DetailTitle } from 'library/Text'
import 'react-dropdown/style.css'
import { CustomCheckBox } from 'components/CustomCheckBox'
import { ButtonEmoji } from 'library/Emoji'
import { ListContainer, DetailContainer } from 'library/Container'
import ToggleDisplay from 'react-toggle-display'

export const Task = (props) => {
  const dispatch = useDispatch()

  /* const handleDetailButtonClick = () => {
    return (
      <DetailTitle>{props.item.description}</DetailTitle>
    )
  } */
  const [show, setShow] = useState(false)

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
        {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Show detail" /> */}
        <label>
          <CustomCheckBox
            isChecked={props.item.done}
            onChangeHandler={handleCheckBox} />
        </label>
        <span onClick={showDetailHandler}>{props.item.name}</span>
        <RemoveButton onClick={handleDoneButtonClick}><ButtonEmoji ariaLabel='wastebin'>🗑</ButtonEmoji></RemoveButton>
      </ListContainer>
      <ToggleDisplay show={show}>
        <DetailContainer>
          <span>{props.item.description}</span>
          <span>Due: {props.item.dueDate}</span>
          <span>Category: {props.item.category}</span>
        </DetailContainer>
      </ToggleDisplay>
    </>
  )
}