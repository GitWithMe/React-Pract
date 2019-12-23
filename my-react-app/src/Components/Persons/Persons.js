import React from 'react';
import Prsn from './Person/Person';

const persons = (props) => props.person.map((person, index) => { //We have copied this from the render method of App.js for refactoring this code 
 return <Prsn
 name = {person.name} 
 age = {person.age}
 key = {person.id /*Identify the array elements uniquely*/} 
 click = {() => props.clicked(index) /*delete the particular index clicked on and replacing 'this' with 'props'*/}
 changed = {(event) => props.changed(event, person.id)}
/>
});

export default persons;
