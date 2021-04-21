import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem, IconButton, ListItemIcon } from '@material-ui/core';
import { MoreVert, Delete, MoveToInbox } from '@material-ui/icons/';
import { deleteTask, deleteList } from 'store/tasks';
import Dialog from 'components/DialogSelect';

export default ({ type, listSlug, ...taskData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialog, setDialog] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (action) => {
    handleClose();
    if (action === 'delete') {
      if (type === 'task') {
        dispatch(deleteTask({ id: taskData.id, listSlug }));
      }
      if (type === 'project') {
        dispatch(deleteList(listSlug));
      }
    }
    if (action === 'move') {
      // dispatch(moveTask());
      setDialog(true);
    }
  };

  return (
    <>
      <IconButton
        aria-label="options"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={() => handleSelect('delete')}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          Delete
        </MenuItem>
        {type === 'task' && (
          <MenuItem onClick={() => handleSelect('move')}>
            <ListItemIcon>
              <MoveToInbox />
            </ListItemIcon>
            Move Task
          </MenuItem>
        )}
      </Menu>
      <Dialog open={dialog} setOpen={setDialog} listSlug={listSlug} {...taskData} />
    </>
  );
};
