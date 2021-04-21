import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@material-ui/core';
import {
  Menu,
  ChevronLeft,
  WbSunnyOutlined,
  FolderOpenOutlined
} from '@material-ui/icons';
import { useStyles } from './style';

const Test = ({ page, toggleDrawer }) => {
  const classes = useStyles();
  const [linkProps, setLinkProps] = useState({ path: '/' });
  React.useEffect(() => {
    switch (page) {
      case 'Settings':
        setLinkProps({ text: 'Settings', path: '/settings', icon: 'cog' });
        break;
      default:
        setLinkProps({ text: 'MyDay', path: '/', icon: 'sun' });
        break;
    }
  }, [page]);
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
          <Test toggleDrawer={toggleDrawer} />
          <Divider />
          <Test toggleDrawer={toggleDrawer} page="Settings" />
        </List>
      </Drawer>
    </>
  );
};
