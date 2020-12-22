import React from 'react'
import { useDispatch } from 'react-redux'
import swal from '@sweetalert/with-react'

import { todos } from '../reducers/todos'
import { Wrapper } from '../styledComponents/containers'
import { Text } from '../styledComponents/texts'
import { DeleteAllButton } from '../styledComponents/buttons'

export const DeleteAll = () => {
  const dispatch = useDispatch()

  const onRemoveClick = () => {
    swal ({
      title:'Deleting all of your to-dos!',
      text:'Are you sure?',
      buttons: ['No, thanks!', 'Yes, very sure!'],
      className: 'swal-box'
    })
    .then((willRemove) => {
      if (willRemove) {
        dispatch(todos.actions.removeAll())
        dispatch(todos.actions.showList())
      }
    }) 
  }

  return (
    <Wrapper>
      <Text>
        Delete All
      </Text>
      <DeleteAllButton type='button' onClick={onRemoveClick}>
        X
      </DeleteAllButton>
    </Wrapper>
  )
}