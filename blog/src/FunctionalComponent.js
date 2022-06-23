// import logo from './logo.svg';
import './App.css';
//import React from 'react';

function FunctionalComponent() {
  return (
    <div className="FunctionalComponent">
      <h1>Functional Componenet is used !</h1>
    </div>
  );
}

export default FunctionalComponent;

/* function FunctionalComponent() {
 	return React.createElement('div','FunctionalComponent',React.createElement('h1',null,'Functional Componenet is used !'));
}

Both functions gives the identical output but "React.createElement('h1','FunctionalComponent','Functional Componenet is used !');"
is used without the use of JSX.
*/
  