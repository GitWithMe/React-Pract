import React, {Component} from 'react';
import styled from 'styled-components';
//We don't need the css file as we can style this
const StyledDiv = styled.div` 
    width: 60%;
	margin: auto;
	border: 1px solid #eee;
	box-shadow: 0 6px 7px #ccc;
	padding: 16px;
	text-align: center;

	'@media (min-width:500px)':{
    		width : '450px'
    	}
`;

/****CONVERTING TO CLASS BASED COMPONENTS********/
class Person extends Component{
	render(){ 
      console.log('[person.js] is now rendering');
      return ( //2 way binding in the input field
		//className="Person" to use the css file
		//In a class based components, the props are accessed with this keyword
        <StyledDiv>
		<p onClick={this.props.click}>Hi, My name is {this.props.name} and my age is {this.props.age} years old</p>
		<p>{this.props.children}</p>
		<input type='text' onChange={this.props.changed /*Will Forward to Persons.js*/} value={this.props.name} />
		</StyledDiv> 
		);
	}
};

export default Person; //This statement enables us to import any Name to get this file in main App.js
//The level will be as follows = Person -> Persons -> App
