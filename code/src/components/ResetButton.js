import React from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'

const ResetButton = () => {
  const dispatch = useDispatch()
  const style = {
    margin: "5px",
    fontSize: "9px",
    padding: "2px",
  }
  return (
    <Button
      style={style}
      size="small"
      variant="contained"
      color="primary"
      onClick={() => dispatch(todo.actions.resetTasks())}
    >
      reset
    </Button>
  )
}
export default ResetButton