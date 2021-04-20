import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: "flex",
    flexFlow: 'row wrap',
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconbutton: {
    borderRadius: 5,
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    }
  },
  bottomRow: {
    width: "100%",
    textAlign: "right"
  }
}))