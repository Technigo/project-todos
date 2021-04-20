import React from 'react';
import { useDispatch } from 'react-redux'
import {
  Paper,
  FormControlLabel,
  Checkbox,
  IconButton
} from '@material-ui/core';
import {
  RadioButtonUncheckedOutlined,
  CheckCircleRounded,
  CancelOutlined
} from '@material-ui/icons';
import { toggleTask, deleteTask } from 'store/tasks';
import { useStyles } from './style';

export default ({ value, id, complete }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FormControlLabel
        className={classes.checkboxControl}
        control={
          <Checkbox
            color="primary"
            // disabled={complete}
            checked={complete}
            onChange={() => dispatch(toggleTask(id))}
            icon={<RadioButtonUncheckedOutlined />}
            checkedIcon={<CheckCircleRounded />}
            name="checkedH" />
        }
        label={value} />
      <IconButton
        onClick={() => dispatch(deleteTask(id))}
        aria-label="delete task">
        <CancelOutlined />
      </IconButton>
    </Paper>
  );
};
