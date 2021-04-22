import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all .5s ease-in-out',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    '&:hover, &:focus-within': {
      backgroundColor: theme.palette.background.default,
      cursor: 'pointer'
    }
  },
  input: {
    flex: 1
  },
  inputIcon: {
    paddingRight: 10
  }
}));
