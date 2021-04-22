import React from 'react';
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
import { useStyles } from './style'

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const toggleDialog = () => {
    setValue('');
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      toggleDialog();
      dispatch(addList(value));
    }
  };

  return (
    <>
      <Button className={classes.button} variant="contained" color="primary" onClick={toggleDialog}>
        New Project
      </Button>
      <Dialog open={open} onClose={toggleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            className={classes.textField}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleSubmit}
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
