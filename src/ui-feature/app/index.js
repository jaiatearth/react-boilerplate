import React, { Component } from 'react';
import '../assets/App.css';
import SampleComponent from '../components/sample-component';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> Welcome to the BoilerPlate</h1>
       <SampleComponent />
      </div>
    );
  }
}

export default App;
