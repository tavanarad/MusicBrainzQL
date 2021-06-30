import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/client';
import {client} from './shared/repositories';


const theme = createMuiTheme();

ReactDOM.render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
