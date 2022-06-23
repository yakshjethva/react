import React,{Component} from 'react';

class StateClassDemo extends Component  {
  
	constructor()
	{
		/*Can't use useState here as the functional component */
		/*calling a super constructor is mandatory*/
		super();
		this.state = {
			data:"First State using the Class Component"
		}
	}
	updateState(){
		this.setState({data:"Updated State using the Class Component"});
	}
	render(){
		return(
			<div className="StateClassDemo">
				<h2>{this.state.data}</h2>
				<p>Hello World Class Demo for states!</p>
				<button onClick = {()=>this.updateState()} >Update State</button>
			</div>
	  	);
  	}
	
}

export default StateClassDemo;
