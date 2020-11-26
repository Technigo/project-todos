import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppBar, Badge } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"
import DoneAllIcon from "@material-ui/icons/DoneAll"

import { tasks } from "reducers/tasks"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Header = () => {
  const allTasks = useSelector((store) => store.tasks)
  const dispatch = useDispatch()

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ToDos
          </Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(tasks.actions.removeAll())}
          >
            remove all
          </Button>
          <DoneAllIcon onClick={() => dispatch(tasks.actions.markAll())} />
          <Badge badgeContent={allTasks.todos.length} color="secondary">
            <AssignmentTurnedInIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  )
}
