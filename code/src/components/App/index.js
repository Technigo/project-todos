import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import store from 'store';
import Pages from 'pages';

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage:
            'url(https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }
      }
    }
  },
  palette: {
    type: 'dark'
  }
});

theme = responsiveFontSizes(theme);

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Pages />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};
