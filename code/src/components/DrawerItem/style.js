import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
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
