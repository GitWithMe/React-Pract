import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import styled from 'styled-components';

//alt here used by StyledButton tag and is exclusive to styled-components package
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

/***************CLASS BASED COMPONENTS************/
class App extends Component {
  
  constructor(props){ //Using a constructor to initialise a state
    super(props); //To get the Component to work
    console.log('[App.js] constructor');
  } 

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


/***************FUNCTIONS BASED COMPONENTS************/
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
    //Used to toggle
    console.log('[App.js] rendering....');
    let person = null; //null by default 
    if(this.state.showPerson){  //if true
      person = ( //We use the Persons tag because the of the import Persons
      <div>
       <Persons person = {this.state.person} 
       clicked = {this.deletePerson} 
       changed = {this.myNameChange /*This came from Persons.js*/}/>
      </div>
    );
   }

   //Changind the css dynamically
   let classes = []; //empty array
   if(this.state.person.length <=3){
    classes.push('red');// classes = ['red']; the red class is defined in App.css
   }
   if(this.state.person.length <=2){
    classes.push('bold');// classes = ['red','bold']; the bold class is defined in App.css
   }
      //join converts array to string
      //hence className = "red"/"bold"
      //The alt here is used by styled-components for dynamic styling
      //Calling the person variable of the render method in the second button
    return (
      <div className="App">
      <h1>{this.props.appTitle}</h1>
      <p className={classes.join(' ')}>4 core 4 thread processors can still kinda run games at 60fps</p>
      <StyledButton alt = {this.state.showPerson} onClick = {this.togglePerson}>Toggle People</StyledButton>
      {person}
      </div>
    );
  }
}

export default App;
