import React, { Component } from 'react';
import './App.css';
import Prsn from './Person/Person.js';

class App extends Component {
  state = { //Used to make the props more dynamic
    person: [
    {id:"1", name:"Namit", age: 23},
    {id:"2", name:"Krrish", age: 18},
    {id:"3", name:"Tarun", age: 50},
    {id:"4", name:"Meenu", age: 48},
    {id:"5", name:"Cherry", age: 3}
    ],
    showPerson: false // state for toggling an event
  }

  deletePerson = (personIndex) =>{
   const person = [...this.state.person]; //Copying the person array from the state object
   person.splice(personIndex,1); //
   this.setState({person : person});
  }

   myNameChange = (event, id) =>{ //Event Target Value are for input field
    const personIndex = this.state.person.findIndex((pers) => { //If this returns true then only it stores the value in the variable
      return pers.id === id; //makes use of the id in the person's array in the state object
    });
    const myperson = {...this.state.person[personIndex]}; //copies the original array and finds the required
    myperson.name = event.target.value;

    //For updating the state we need to have a const variable name of same array
    const person = [...this.state.person];
    person[personIndex] = myperson;
    this.setState({ //changes the state defined above
     person: person});
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
       {this.state.person.map((person, index) => { //creating a list by dynamically mapping each element of person array along with their index into the jsx code
          return <Prsn style = {style}
          name = {person.name}
          age = {person.age}
          key = {person.id /*Identify the array elements uniquely*/} 
          click = {() => this.deletePerson(index) /*delete the particular index clicked on*/}
          changed = {(event) => this.myNameChange(event, person.id)}
          />
       })}
       </div>
        );
   }
      //Calling the person variable of the render method in the second button
    return (
      <div className="App">
      <button style={style}>Change Name</button>
      <h1>React Practice!</h1>
      <button style={style} onClick = {this.togglePerson}>Toggle People</button>
      {person}
      </div>
    );
  }
}

export default App;
