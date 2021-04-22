import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from '@material-ui/core';
import { WbSunnyOutlined, FolderOpenOutlined } from '@material-ui/icons';
// import { useSelector } from 'react-redux';
// import Dialog from 'components/DialogText';
import Options from 'components/Options';
import { useStyles } from './style';

export default ({ name, slug, toggleDrawer }) => {
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
      className={classes.root}
      activeClassName={classes.activeLink}
      exact>
      <ListItemIcon>
        {linkProps.icon === 'sun' && <WbSunnyOutlined />}
        {linkProps.icon === 'cog' && <FolderOpenOutlined />}
      </ListItemIcon>
      <ListItemText primary={linkProps.text} />
      {name && (
        <ListItemSecondaryAction>
          <Options type="project" listSlug={slug} />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};
