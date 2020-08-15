import React from "react";
import PropTypes, { element } from "prop-types";
class Poll extends React.Component {
	render() {
		let poll = this.props.poll;
		return (
			<React.Fragment>
				<div style={{border: "1px solid red"}}>
					<h1>{poll.question}</h1>
					<div className="options">
						{poll.options.map((option, i) => {
							return <button key={i}>{option}</button>
					})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Poll;
