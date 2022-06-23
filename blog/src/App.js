// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import PropsFunctionalDemo from './PropsFunctionalDemo';
// import ClassComponent from './ClassComponent';
// import ButtonComponent from './ButtonComponent';

// function App() {
// 	function NestedComponent()
// 	{
// 		return(
// 			<div>
// 				<h1>nestedComponent is called with the local scope!</h1>
// 			</div>
// 		)
// 	}
// 	return (
// 		<div className='AppClass'>
// 			<h1>Hello Appjs is called!</h1>
// 			<NestedComponent />	
// 		</div>
// 	);
// }

function App() {
	const [name, setName] = useState("Yaksh");
	return (
		<div>
			<h1>Use of Props and State</h1>
			<PropsFunctionalDemo name={name} />
			<div style={{ textAlign: 'center', margin: '15px' }}>
				<button onClick={() => { setName("Updated Name") }} >Update Name</button>
			</div>
		</div>
	);
}

export default App;

/* 
	<NestedComponent />
	{ NestedComponent() }

	This both works same
*/