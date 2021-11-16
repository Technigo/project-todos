import React from "react";
import AppBar from "@material-ui/core/appBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles({
  toolbar: {
    textAlign: "center",
    height: 80,
  },
  heading: {
    margin: "auto",
  },
});
const Header = () => {
  const classes = useStyles();
  const primary = red[500];
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.heading} variant="h5" align="center">
          Todo App
        </Typography>
      </Toolbar>
      <Button variant="contained" color="Secondary">
        Add task
      </Button>
    </AppBar>
  );
};
export default Header;
