import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    transition: 'all .5s ease-in-out',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: theme.palette.background.default
      }
    }
  },
  checkboxControl: {
    flex: 1
  }
}));
