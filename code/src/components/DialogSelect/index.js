import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Select,
  FormControl,
  MenuItem,
  Input,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@material-ui/core';
import { addTask, deleteTask } from 'store/tasks';
import { useStyles } from './style';

export default ({ open, setOpen, listSlug, ...taskData }) => {
  const classes = useStyles();
  const lists = useSelector((store) => store.tasks.lists);
  const [value, setValue] = React.useState(listSlug);
  const dispatch = useDispatch();

  const toggleDialog = () => {
    setValue(listSlug);
    setOpen(!open);
  };

  const handleSubmit = () => {
    toggleDialog();
    dispatch(addTask({ value: taskData.value, slug: value }));
    dispatch(deleteTask({ id: taskData.id, listSlug }));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Dialog open={open} onClose={toggleDialog} aria-labelledby="dialogTitle" fullWidth>
        <DialogTitle id="dialogTitle">Select new location for task</DialogTitle>
        <DialogContent>
          <FormControl className={classes.select}>
            <Select
              labelId="dialogSelectLabel"
              id="dialogSelect"
              value={value}
              onChange={handleChange}
              input={<Input />}>
              {lists.map((list) => (
                <MenuItem key={list.slug} value={list.slug}>
                  <Typography variant="overline">{list.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={value === listSlug}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
