import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main';
import Favorite from './component/Favorite';
import Header from './component/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <>
       <Router>
      <Header/>
      <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/fav">
        <Favorite/>
      </Route>
      </Switch>
       </Router> 
      </>
    )
  }
}

export default App
