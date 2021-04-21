import React from 'react';
import { useDispatch } from 'react-redux';
import { Paper, FormControlLabel, Checkbox } from '@material-ui/core';
import {
  RadioButtonUncheckedOutlined,
  CheckCircleRounded
  // CancelOutlined
} from '@material-ui/icons';
import { toggleTask } from 'store/tasks';
import Options from 'components/Options';
import { useStyles } from './style';

export default ({ listSlug, ...taskData }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FormControlLabel
        className={classes.checkboxControl}
        control={
          <Checkbox
            color="primary"
            checked={taskData.complete}
            onChange={() => dispatch(toggleTask({ id: taskData.id, listSlug }))}
            icon={<RadioButtonUncheckedOutlined />}
            checkedIcon={<CheckCircleRounded />}
            name="checkedH" />
        }
        label={taskData.value} />
      <Options type="task" listSlug={listSlug} {...taskData} />
    </Paper>
  );
};
