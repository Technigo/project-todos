import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { palette, borders, margin, shadows } from "@material-ui/system"
import { Box, IconButton, Checkbox, FormControl, FormGroup, FormControlLabel } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

import todoList from "../reducers/todoList"

const Task = (props) => {
  const dispatch = useDispatch()
  return (
    <Box 
      bgcolor="primary.main"
      borderRadius={10}
      boxShadow={3}
      margin={1}
    >
      <div className="task">
        <Box marginLeft={2}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={
                  <div className="checkbox-spacer">
                    <Checkbox
                      checked={props.task.isComplete}
                      onChange={() => dispatch(todoList.actions.toggleComplete(props.task.id))}
                      icon={<RadioButtonUncheckedOutlinedIcon />}
                      checkedIcon={<CheckCircleIcon color="secondary"/>}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </div>
                }
                label={`${props.task.description.charAt(0).toUpperCase()}${props.task.description.substr(1)}`}
                labelPlacement="end"
                style={
                  props.task.isComplete ? {color: "#acacac"} : {}
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
          <IconButton
            onClick={() => dispatch(todoList.actions.removeTask(props.task.id))}
          >
            <DeleteIcon />
          </IconButton>
      </div>
    </Box>
  )
}

export default Task