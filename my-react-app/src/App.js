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
    ],
    showPerson: false // state for toggling an event
  }

  myClickButton = (newName) =>{ //Used to bind the states like in onClick event 
    this.setState({ //changes the state defined above
     person: [
    {name:newName , age: 23},
    {name:"Krrish", age: 17},
    {name:"Tarun", age: 50},
    {name:"Meenu", age: 48},
    {name:"Cherry", age: 3}
    ] 
    })
  }

   myNameChange = (event) =>{ //Event Target Value are for input field 
    this.setState({ //changes the state defined above
     person: [
    {name:event.target.value, age: 23},
    {name:"Krrish", age: 17},
    {name:"Tarun", age: 50},
    {name:"Meenu", age: 48},
    {name:"Cherry", age: 3}
    ] 
    })
  }

  togglePerson = () =>{
    const doesShow = this.state.showPerson; //This stores the value of showPerson state
    this.setState({
      showPerson: !doesShow
    }); //Toggles between the showPerson boolean (T/F)
  }

  render() { //here this refers to the class App
    //
    const style = { //Used for inline styling
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    //Used to toggle
    let person = null; //null by default 
    if(this.state.showPerson){  //if true
      person = (
       <div>
        <Prsn
        name = {this.state.person[0].name} 
        age = {this.state.person[0].age}
        click = {this.myClickButton.bind(this, "Ya Yeet")}
        changed = {this.myNameChange}></Prsn> 
        <Prsn 
        name = {this.state.person[1].name} 
        age = {this.state.person[1].age}></Prsn>
        <Prsn 
        name = {this.state.person[2].name} 
        age = {this.state.person[2].age}></Prsn>
        <Prsn
        name = {this.state.person[3].name} 
        age = {this.state.person[3].age}></Prsn>
        <Prsn 
        name = {this.state.person[4].name} 
        age = {this.state.person[4].age}>I am Dogu</Prsn>
        </div>
        );
   }
      //Calling the person variable of the render method in the second button
    return (
      <div className="App">
      <button style={style} onClick = {this.myClickButton.bind(this, "Baby Yoda")}>Change Name</button>
      <h1>React Practice!</h1>
      <button style={style} onClick = {this.togglePerson}>Toggle People</button>
      {person}
      </div>
    );
  }
}

export default App;
