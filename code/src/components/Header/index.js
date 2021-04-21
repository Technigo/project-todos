import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Typography, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Drawer from 'components/Drawer';
import { clearList } from 'store/tasks';
import { useStyles } from './style';

export default () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const currentList = useSelector((store) => {
    const listname = !slug ? 'my-day' : slug;
    return store.tasks.lists.find((list) => list.slug === listname);
  });
  const classes = useStyles();
  return (
    <>
      <Container component="header" className={classes.root}>
        <Box className={classes.topRow}>
          <Drawer />
        </Box>
        <Box>
          <Typography variant="h4">{currentList.name}</Typography>
          <Typography variant="subtitle1">{moment().format('dddd, DD MMMM')}</Typography>
        </Box>
        <Box>
          <IconButton
            disabled={currentList.tasks.length === 0}
            onClick={() => dispatch(clearList(currentList.slug))}
            aria-label="delete"
            className={classes.iconbutton}>
            <Delete />
          </IconButton>
        </Box>
        <Box className={classes.bottomRow}>
          <Typography variant="overline">{currentList.tasks.length} tasks</Typography>
        </Box>
      </Container>
    </>
  );
};
