import React from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'
const AllDoneButton = () => {
  const dispatch = useDispatch()
  const style = {
    marginRight: "5px",
    fontSize: "10px",
    padding: "2px"
  }
  return (
    <Button
      style={style}
      size="small"
      variant="contained"
      color="primary"
      onClick={() => dispatch(todo.actions.markAllDone())}
    >
      mark all done
    </Button>
  )
}
export default AllDoneButton