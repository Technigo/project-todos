import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {
  IconButton,
  Drawer,
  List,
  // ListItem,
  // ListItemText,
  // ListItemIcon,
  // ListItemSecondaryAction,
  Divider,
  Hidden,
  useMediaQuery
} from '@material-ui/core';
import {
  Menu,
  ChevronLeft
  // WbSunnyOutlined,
  // FolderOpenOutlined
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import NewProjectDialog from 'components/DialogText';
import DrawerItem from 'components/DrawerItem';
// import Options from 'components/Options';
import { useStyles } from './style';

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();
  const projects = useSelector((store) => store.tasks.lists.slice(1));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Hidden mdUp>
        <IconButton
          aria-label="open drawer"
          onClick={toggleDrawer}
          className={classes.menuButton}>
          <Menu />
        </IconButton>
      </Hidden>
      <Drawer className={classes.root} onClose={toggleDrawer} anchor="left" open={open} variant={matches ? 'permanent' : 'temporary'}>
        <div className={classes.drawerHeader}>
          <Hidden mdUp>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Hidden>
        </div>
        <List className={classes.drawer}>
          <DrawerItem toggleDrawer={toggleDrawer} />
          <Divider />
          {projects.map((project) => (
            <DrawerItem key={project.slug} toggleDrawer={toggleDrawer} {...project} />
          ))}
          <NewProjectDialog className={classes.newProject} />
        </List>
      </Drawer>
    </>
  );
};
