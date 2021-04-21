import React from 'react';
// import slugify from 'slugify';
import { useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { addList } from 'store/tasks';

export default () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
    toggleDialog();
    dispatch(addList(value));
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleDialog}>
        New Project
      </Button>
      <Dialog open={open} onClose={toggleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            margin="dense"
            id="name"
            label="Project name"
            type="text"
            fullWidth />
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
