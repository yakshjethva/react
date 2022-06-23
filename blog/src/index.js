import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
//import PropsFunctionalDemo from './PropsFunctionalDemo';
// import FunctionalComponent from './FunctionalComponent';
// import ClassComponent from './ClassComponent';
// import ButtonComponent from './ButtonComponent';
// import StateFunctionalDemo from './StateFunctionalDemo';
// import StateClassDemo from './StateClassDemo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
	{
		
		<App />
    	/*<FunctionalComponent />
    	<ClassComponent />
		<ButtonComponent />
		<StateFunctionalDemo />
		<StateClassDemo /> 
		<PropsFunctionalDemo name={"Name"} email={"email@admin.com"} other={{mobile:'121-212-1212', address:'Uranus'}}/>*/}
	</>
);

/* Elements must be inside any tag (empty tag are also allowed <></>)*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
