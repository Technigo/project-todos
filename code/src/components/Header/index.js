import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Typography, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Drawer from 'components/Drawer';
import { clearList } from 'store/tasks';
import { useStyles } from './style';

export default () => {
  const dispatch = useDispatch();
  const listLength = useSelector((store) => store.tasks.list.length);
  const classes = useStyles();
  return (
    <>
      <Container component="header" className={classes.root}>
        <Box className={classes.topRow}>
          <Drawer />
        </Box>
        <Box>
          <Typography variant="h4">My Day</Typography>
          <Typography variant="subtitle1">{moment().format('dddd, DD MMMM')}</Typography>
        </Box>
        <Box>
          <IconButton
            disabled={listLength === 0}
            onClick={() => dispatch(clearList())}
            aria-label="delete"
            className={classes.iconbutton}>
            <Delete />
          </IconButton>
        </Box>
        <Box className={classes.bottomRow}>
          <Typography variant="overline">{listLength} tasks</Typography>
        </Box>
      </Container>
    </>
  );
};
