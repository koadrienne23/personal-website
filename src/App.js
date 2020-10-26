import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import Travel from './components/pages/Travel/Travel';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Research from './components/pages/Research/Research';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={window.location.pathname || ''}>
          <Header/>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about-me' exact component={AboutMe} />
            <Route path='/travel' exact component={Travel} />
            <Route path='/research' exact component={Research} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
