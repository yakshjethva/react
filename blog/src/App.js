// import logo from './logo.svg';
import React, { useState } from 'react';
//import './App.css';
//import PropsFunctionalDemo from './PropsFunctionalDemo';
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

/*State and Props demo */
/*function App() {
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
}*/

/* Get input value without form for the inputbox only */
function App() {
	const [data, setData] = useState(null);
	const [print, setPrint] = useState(false);

	function getData(val)
	{
		console.warn(val.target.value);
		setData(val.target.value);
		setPrint(false);
	}
	return (
		<div>
			<h1>Input Value get</h1>
			<div class="InputValue">
				{print ? <p>{data}</p> : null}

				<input type="text" onInput={getData}></input>
				<button onClick={()=>setPrint(true)}>Get the Value</button>
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