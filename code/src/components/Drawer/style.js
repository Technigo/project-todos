import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    paddingLeft: 0
  },
  drawer: {
    overflowX: 'hidden',
    width: '50vw',
    [theme.breakpoints.up('md')]: {
      width: '20vw'
    }
  }
}));
