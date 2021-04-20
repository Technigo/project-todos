import React from 'react';
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
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FormControlLabel
        className={classes.checkboxControl}
        control={
          <Checkbox
            color="primary"
            // TODO: dispatch completeTask action
            // onChange={() => dispatch(completeTask)}
            icon={<RadioButtonUncheckedOutlined />}
            checkedIcon={<CheckCircleRounded />}
            name="checkedH" />
        }
        label="Custom icon" />
      <IconButton
        // TODO: dispatch deleteTask action
        // onClick={() => dispatch(deleteTask)}
        aria-label="delete task">
        <CancelOutlined />
      </IconButton>
    </Paper>
  );
};
