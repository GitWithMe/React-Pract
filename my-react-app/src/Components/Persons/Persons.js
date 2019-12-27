import React, {Component} from 'react';
import Prsn from './Person/Person';

class Persons extends Component{
	/********DEMONSTRATIONS ALL THE LIFECYCLES(WHEN PROPS CHANGE)*****/
/*1.)*/ static getDerivedStateFromProps(props,state){ //Gets invoked when New Props are to be introduced
  console.log('[Persons.js] getDerivedStateFromProps');
  return state;
}

/*2.)*/ shouldComponentUpdate(nextProps, nextState){ //Gets invoked for upcoming props and state and must return a Boolean(T/F)
 console.log('[Persons.js] shouldComponentUpdate');
  return true;
}

/*3.)*/ getSnapshotBeforeUpdate(prevProps, prevState){ //Gets invoked right before new changes on the DOM and saves it
   console.log('[Persons.js] getSnapshotBeforeUpdate');
   return {message: 'SNAPSHOTTED'};
}

/*4.)*/ render(){ //Gets Invoked to make actual changes in the DOM
 console.log('[Persons.js] is rendering....');
 return this.props.person.map((person, index) => { //We have copied this from the render method of App.js for refactoring this code 
 return (
 <Prsn
 name = {person.name} 
 age = {person.age}
 key = {person.id /*Identify the array elements uniquely*/} 
 click = {() => this.props.clicked(index) /*delete the particular index clicked on and replacing 'this' with 'props'*/}
 changed = {(event) => this.props.changed(event, person.id)} //This came from Persons.js and would now get forward to App.js
/>
);
});
}
}

export default Persons;
