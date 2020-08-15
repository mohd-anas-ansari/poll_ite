import React from "react";
import PropTypes from "prop-types";
class Poll extends React.Component {
	render() {
		let poll = this.props.poll;
		console.log(poll);
		return (
			<React.Fragment>
				<div style={{border: "1px solid red"}}>
					<h1>{poll.question}</h1>
				</div>
			</React.Fragment>
		);
	}
}

export default Poll;
