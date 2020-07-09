import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form1 from './Form1';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/inscription" component={App} exact />

      <Route path="/Form1/:img" component={Form1} />

    </Switch>

  </BrowserRouter>
  , document.getElementById('root')
);
