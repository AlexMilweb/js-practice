import React, { PureComponent } from 'react';
import './App.css';
import '../../assets/bootstrap/css/bootstrap.css';
import '../../assets/bootstrap/css/bootstrap-theme.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ContactsSearch from '../../pages/ContactsSearch/ContactsSearch';
import Main from '../../pages/Main/Main';
import LifeCycle from '../../pages/LifeCycle/LifeCycle';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={Main} />
          <Route path='/contacts-search/' component={ContactsSearch} />
          <Route path='/life-cycle/' component={LifeCycle} />

        </div>
      </Router>
    );
  }
}
