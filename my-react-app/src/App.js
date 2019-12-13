import React, { Component } from 'react';
import './App.css';
import Prsn from './Person/Person.js';

class App extends Component {
  state = { //Used to make the props more dynamic
    person: [
    {name:"Namit", age: 23},
    {name:"Panda", age: 18},
    {name:"Tarun", age: 50},
    {name:"Meenu", age: 48},
    {name:"Cherry", age: 3}
    ]
  }

  myClickButton = () =>{
    this.setState({ //changes the state defined above
     person: [
    {name:"Namit Dhupar", age: 23},
    {name:"Krrish", age: 17},
    {name:"Tarun", age: 50},
    {name:"Meenu", age: 48},
    {name:"Cherry", age: 3}
    ] 
    })
  };

  render() { //here this refers to the class App
    return (
      <div className="App">
      <button onClick = {this.myClickButton}>yoRhA</button>
        <h1>Vadim Blyat!</h1> 
        <Prsn name = {this.state.person[0].name} age = {this.state.person[0].age}></Prsn> 
        <Prsn name = {this.state.person[1].name} age = {this.state.person[1].age}></Prsn>
        <Prsn name = {this.state.person[2].name} age = {this.state.person[2].age}></Prsn>
        <Prsn name = {this.state.person[3].name} age = {this.state.person[3].age}></Prsn>
        <Prsn name = {this.state.person[4].name} age = {this.state.person[4].age}>I am Dogu</Prsn>
      </div>
    );
  }
}

export default App;
