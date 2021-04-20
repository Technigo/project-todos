import React from 'react';
import { Provider } from 'react-redux';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import store from 'store';
import Main from 'components/Main';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </Provider>
  );
};
