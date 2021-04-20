import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconbutton: {
    borderRadius: 5,
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    }
  }
}))