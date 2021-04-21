import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    paddingLeft: 0
  },
  drawer: {
    width: '50vw'
  },
  link: {
    paddingLeft: '10px',
    margin: theme.spacing(1)
  },
  activeLink: {
    paddingLeft: '5px',
    borderLeftStyle: 'solid',
    borderLeftWidth: 'medium',
    borderLeftColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover
  }
}));
