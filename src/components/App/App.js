import React, { PureComponent } from 'react';
import './App.css';
import '../../assets/bootstrap/css/bootstrap.css';
import '../../assets/bootstrap/css/bootstrap-theme.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContactsSearch from '../../pages/ContactsSearch/ContactsSearch';
import Main from '../../pages/Main/Main';
import Header from '../Header/Header';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={Main} />
          <Route path='/contacts-search/' component={ContactsSearch} />

        </div>
      </Router>
    );
  }
}
