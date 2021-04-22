import React from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'

const ClearAllButton = () => {
  const dispatch = useDispatch()
  const style = {
    marginRight: "5px",
    fontSize: "9px",
    padding: "2px"
  }
  return (
    <Button
      style= {style}
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