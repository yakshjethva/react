import React from 'react';
import {useState} from 'react';

function PropsFunctionalDemo(props) 
{ 
	const [name,SetName]=useState("Yaksh");
  	return (
		<div className="PropsDemo" style={{backgroundColor:"grey", textAlign: "center"}}>
			<h1>{props.name}</h1>
		</div>
	);
}

export default PropsFunctionalDemo;
