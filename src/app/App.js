import React, {Component} from 'react';
import './App.css';
import {RoverSelectContainer} from '../roverSelect';

class App extends Component {
  render() {
    return (
        <div className="app">
          <h1>Mars Rover Photos</h1>
          <RoverSelectContainer/>
        </div>
    );
  }
}

export default App;