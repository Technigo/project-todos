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

export default ({ open, setOpen, listSlug, ...taskData }) => {
  // const [open, setOpen] = React.useState(dialog);
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
      <Dialog open={open} onClose={toggleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <FormControl>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={value}
              onChange={handleChange}
              input={<Input />}>
              {lists.map((list) => (
                <MenuItem key={list.slug} value={list.slug}>
                  <Typography variant={list.type === 'primary' ? 'overline' : 'caption'}>
                    {list.name}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
