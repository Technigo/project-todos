import React, { useState } from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  Container,
  Fab,
  Dialog,
  Tooltip,
  Snackbar,
  Alert,
} from "@material-ui/core"
import styled from "styled-components"
import { ThemeProvider } from "@material-ui/core/styles"
import { Add } from "@material-ui/icons"

import { tasks } from "reducers/tasks"
import { TodoList } from "components/TodoList"
import { TodoInput } from "components/TodoInput"
import { Header } from "components/Header"
import theme from "./theme"

//not really needed for one, but add more here if you want to combine reducers
const reducer = combineReducers({ tasks: tasks.reducer })

const store = configureStore({ reducer })

//special syntax needed to override styling of MUI (&&)
const MyContainer = styled(Container)`
  && {
    padding: 0;
    background-color: #212121;
    height: 100vh;
    @media (min-width: 480px) {
      height: 70vh;
    }
  }
`;

const MyFab = styled(Fab)`
  && {
    position: fixed;
    bottom: 20px;
    right: 30px;
  }
`;

export const App = () => {
  //local state and some functions just to manage some UI elements of the app
  const [open, setOpen] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleSnackOpen = () => {
    setOpenSnack(true)
  }

  const handleSnackClose = (event, reason) => {
    setOpenSnack(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MyContainer maxWidth="xs">
          <Header />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <TodoInput onClose={handleClose} handleSnack={handleSnackOpen} />
          </Dialog>
          <TodoList />
          <Tooltip title="Add Todo">
            <MyFab color="primary" aria-label="add" onClick={handleClickOpen}>
              <Add />
            </MyFab>
          </Tooltip>
          <Snackbar
            open={openSnack}
            autoHideDuration={3000}
            onClose={handleSnackClose}
          >
            <Alert onClose={handleSnackClose} severity="success">
              Task Created!
            </Alert>
          </Snackbar>
        </MyContainer>
      </ThemeProvider>
    </Provider>
  )
}
