import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Projects from './components/Projects'
import SingleProject from './components/SingleProject'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Projects}/>
        <Route exact path="/project/:id" component={SingleProject}/>
      </div>
    );
  }
}

export default App;
