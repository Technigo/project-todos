import React from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'
const AllDoneButton = () => {
  const dispatch = useDispatch()
  return (
    <Button
      style={{margin: "5px"}}
      size="small"
      variant="contained"
      color="primary"
      onClick={() => dispatch(todo.actions.markAllDone())}
    >
      all done
    </Button>
  )
}
export default AllDoneButton