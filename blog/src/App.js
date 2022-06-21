// import logo from './logo.svg';
import './App.css';
// import ClassComponent from './ClassComponent';
// import ButtonComponent from './ButtonComponent';

function App() {
	function NestedComponent()
	{
		return(
			<div>
				<h1>nestedComponent is called with the local scope!</h1>
			</div>
		)
	}
	return (
		<div className='AppClass'>
			<h1>Hello Appjs is called!</h1>
			<NestedComponent />	
		</div>
	);
}

export default App;

/* 
	<NestedComponent />
	{ NestedComponent() }

	This both works same
*/