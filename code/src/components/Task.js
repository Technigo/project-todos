import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { palette, borders, margin, shadows } from '@material-ui/system'
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import todoList from '../reducers/todoList'

const useStyles = makeStyles({

})

const Task = (props) => {

  const tasks = useSelector((store) => store.todolist.tasks) //so the file is called todoList... but redux doesn't understand capital letters???

  const dispatch = useDispatch()

  return (
    <Box 
      bgcolor="primary.main"
      // border={1}
      // borderColor="primary.main"
      borderRadius={10}
      boxShadow={3}
      margin={1}
    >
      <div
        className="task"
        key={props.task.id}
      >
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  checked={props.task.isComplete}
                  onChange={() => dispatch(todoList.actions.toggleComplete(props.task.id))}
                  icon={<RadioButtonUncheckedOutlinedIcon />}
                  checkedIcon={<CheckCircleIcon color="primary.main"/>}
                  // style={{ color: "#000" }}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label={props.task.description}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
        <IconButton
          onClick={() => dispatch(todoList.actions.removeTask(props.task.id))}
          // https://bonsaiilabs.com/material-ui-remove-hover/
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </Box>
  )
}

export default Task