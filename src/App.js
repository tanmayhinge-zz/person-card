import React, { Component } from 'react';
import Persons from './Components/Persons';




class App extends Component {

  state = {
    name: 'Tanmay Hinge',
    age: 20
  };

  nameChangedHandler = event => {

    this.state.name = event.target.value;

    this.setState({name: event.target.value})
  };

  ageChangedHandler = event => {

    this.state.age = event.target.value;

    this.setState({age: event.target.value})
  };


  render(){


    let person = <Persons 
  
    name = {this.state.name}
    age = {this.state.age}
    nameChanged = {this.nameChangedHandler}    
    ageChanged = {this.ageChangedHandler}
    />;

    return (
      <div className="App">
        {person}
      </div>
    );

  }
}

export default App;
