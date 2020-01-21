import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


import { tasks } from 'reducers/tasks'
import { dialogs } from 'reducers/dialogs'


const Container = styled.div`
  position: absolute;
  left: calc(50% - 165px);
  top: 250px;
  width:300px;
  padding:12px;
  align-self:center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: white;
  z-index: 1;
`

const Title = styled.h2`
  margin:0;
`

const Supportingtext = styled.p`
  margin: 0;
  color: #6b6b6b;
  `

const DialogActions = styled.div`
  padding:8px;
  display:flex;
   
`

const DialogButton = styled.div`
  padding:10px;

`
const ButtonText = styled.button`
  padding:5px;
`




export const Dialog = ({ title, supportingText, primaryBtnText, secondaryBtnText, showDialog }) => {
  const dispatch = useDispatch()

  const btnClicked = (btnText) => {
    if (btnText.toLowerCase() == "cancel") {
      dispatch(tasks.actions.setTaskToDelete(null))
      dispatch(dialogs.actions.closeDialog())
    }
    if (btnText.toLowerCase() == "delete") {
      dispatch(tasks.actions.removeTask())
      dispatch(dialogs.actions.closeDialog())
    }
    if (btnText.toLowerCase() == "yes") {
      dispatch(tasks.actions.removeAllTasks())
      dispatch(dialogs.actions.closeDialog())
    }
    return
  }

  return (
    <>
      {showDialog &&
        <Container>

          <div>
            {title && <Title>{title}</Title>}
            {supportingText && <Supportingtext>{supportingText}</Supportingtext>}
          </div>
          <DialogActions>
            <DialogButton onClick={() => { }}>
              {primaryBtnText && <ButtonText role="button" aria-label={primaryBtnText} onClick={() => btnClicked(primaryBtnText)}>{primaryBtnText}</ButtonText>}
            </DialogButton>
            <DialogButton onClick={() => { }}>
              {secondaryBtnText && <ButtonText role="button" aria-label={secondaryBtnText} onClick={() => btnClicked(secondaryBtnText)}>{secondaryBtnText}</ButtonText>}
            </DialogButton>
          </DialogActions>
        </Container>
      }
    </>

  )
}






