import React from 'react';
const person = (props) =>{ //Props is used when the Psn tag has attributes
	return (
        <div>
		<p>Hi, My name is {props.name} and my age is {props.age} years old</p>
		<p>{props.children}</p>
		</div>
		);
};

export default person; //This statement enables us to import any Name to get this file in main App.js
