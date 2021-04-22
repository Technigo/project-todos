import React from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'

const ClearAllButton = () => {
  const dispatch = useDispatch()
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={() => dispatch(todo.actions.clearBoard())}
    >
      Clear list
    </Button>
  )
}

export default ClearAllButton