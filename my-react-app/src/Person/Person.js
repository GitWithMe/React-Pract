import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) =>{ //Props is used when the Psn tag has attributes
    //Inline media queries can only be used through radium
    const style = { 
    	'@media (min-width:500px)':{
    		width : '450px'
    	}
    };

	return ( //2 way binding in the input field
		//className="Person" to use the css file
        <div className="Person">
		<p onClick={props.click}>Hi, My name is {props.name} and my age is {props.age} years old</p>
		<p>{props.children}</p>
		<input type='text' onChange={props.changed} value={props.name} />
		</div> 
		);
};

export default Radium(person); //This statement enables us to import any Name to get this file in main App.js
