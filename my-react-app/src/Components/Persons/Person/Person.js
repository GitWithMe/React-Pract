import React from 'react';
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

const person = (props) =>{ //Props is used when the Psn tag has attributes
    //Inline media queries can only be used through radium
   	return ( //2 way binding in the input field
		//className="Person" to use the css file
        <StyledDiv>
		<p onClick={props.click}>Hi, My name is {props.name} and my age is {props.age} years old</p>
		<p>{props.children}</p>
		<input type='text' onChange={props.changed} value={props.name} />
		</StyledDiv> 
		);
};

export default person; //This statement enables us to import any Name to get this file in main App.js
