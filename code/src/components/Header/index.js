import React from 'react';
import {
  Container,
  Box,
  Typography,
  IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  return (
    <Container component="header" className={classes.root}>
      <Box>
        <Typography variant="h4">My Day</Typography>
        <Typography variant="subtitle1">Monday, April 19</Typography>
      </Box>
      <Box>
        <IconButton aria-label="delete" className={classes.iconbutton}>
          <Delete />
        </IconButton>
      </Box>
    </Container>
  );
};
