import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import reportWebVitals from './reportWebVitals';
import ButtonComponent from './ButtonComponent';
import StateDemo from './StateDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
	<App />
    <FunctionalComponent />
    <ClassComponent />
	<ButtonComponent />
	<StateDemo />
	</>
);

/* Elements must be inside any tag (empty tag are also allowed <></>)*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
