import React, {Component} from 'react';
import './App.css';



import MainPage from '../main-page';
import AdminPanel from '../admin-panel';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </Router>
    );
  }
    
}
