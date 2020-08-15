import React from "react";
import PropTypes, { element } from "prop-types";
class Poll extends React.Component {
	render() {
		let poll = this.props.poll;
		return (
			<React.Fragment>
				<div style={{border: "1px solid red"}}>
					<h1>{poll.question}</h1>
					<ul>
						{poll.options.map((option, i) => {
							return <li key={i}>{option}</li>
					})}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default Poll;
