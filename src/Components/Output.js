import React, {Component} from 'react';

class Output extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		}
	}

	reder(){
		return (
			<div className="output">
				{this.props.value}
			</div>
		)
	}
}

export default Output;