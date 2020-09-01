import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from 'components/Pages/Login';
import { connect } from 'react-redux';
import { Dashboard } from 'components/Pages/Dashboard';
import 'App.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 12px;
    color: #6c757d;
    margin: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class App extends Component {
  render () {
    return (
      <div>
        <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/' exact component={Login} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default connect(({data}) => (data), null)(App);