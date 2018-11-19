import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createGlobalStyle } from "styled-components";

import * as serviceWorker from './serviceWorker';
import { Routes } from "./Routes";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
  });
  
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: rgb(255, 254, 252);
    }
    *:focus {
      outline: 0;
    }
    a {
      color: #0d0d0d;
      text-decoration: none;
    }
  `;

ReactDOM.render(
    <ApolloProvider client={client}>
    <GlobalStyle />
    <Routes />
  </ApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
