import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1)
  },
  textField: {
    '& label.Mui-focused': {
      color: theme.palette.primary.contrastText
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.contrastText
    }
  }
}));
