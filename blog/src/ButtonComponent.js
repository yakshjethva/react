function ButtonComponent() {
	function ButtonComponent() {
		console.log("Button component clicked!");
	}
	return (
		<div className="ButtonComponent">
			<button onClick={ButtonComponent}>Hello</button>
			{/* <button onClick={()=>console.log('Button component clicked!')}>Hello</button> */}
		</div>
	);
}

export default ButtonComponent;
/* 
	to write something directly on click event without fucntion we can use arrow
	i.e. "<button onClick={()=>console.log('Button component clicked!')}>Hello</button>"
*/