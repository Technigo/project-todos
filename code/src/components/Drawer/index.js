import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button
} from '@material-ui/core';
import {
  Menu,
  ChevronLeft,
  WbSunnyOutlined,
  FolderOpenOutlined
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from 'store/tasks';
import { useStyles } from './style';

const DrawerItem = ({ name, slug, toggleDrawer }) => {
  const classes = useStyles();
  const [linkProps, setLinkProps] = useState({ path: '/' });
  React.useEffect(() => {
    if (name) {
      setLinkProps({ text: name, path: `/projects/${slug}`, icon: 'cog' });
    } else {
      setLinkProps({ text: 'My Day', path: '/', icon: 'sun' });
    }
  }, [name, slug]);
  return (
    <ListItem
      button
      onClick={toggleDrawer}
      component={NavLink}
      to={linkProps.path}
      className={classes.link}
      activeClassName={classes.activeLink}
      exact>
      <ListItemIcon>
        {linkProps.icon === 'sun' && <WbSunnyOutlined />}
        {linkProps.icon === 'cog' && <FolderOpenOutlined />}
      </ListItemIcon>
      <ListItemText primary={linkProps.text} />
    </ListItem>
  );
};

export default () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.tasks.lists.slice(1));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        aria-label="open drawer"
        onClick={toggleDrawer}
        className={classes.menuButton}>
        <Menu />
      </IconButton>
      <Drawer onClose={toggleDrawer} anchor="left" open={open}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </div>
        <List className={classes.drawer}>
          <DrawerItem toggleDrawer={toggleDrawer} />
          <Divider />
          {projects.map((project) => (
            <DrawerItem key={project.slug} toggleDrawer={toggleDrawer} {...project} />
          ))}
          <Button onClick={() => dispatch(addList('projectsssss'))}>
              new Project1
          </Button>
        </List>
      </Drawer>
    </>
  );
};
