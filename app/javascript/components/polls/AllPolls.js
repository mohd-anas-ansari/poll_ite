import React from "react";
import PropTypes from "prop-types";

import Poll from "./Poll";

class AllPolls extends React.Component {
	render() {
		let polls = this.props.polls;
		return (
			<React.Fragment>
				<h1>All Polls</h1>
				{console.log(this.props.polls)}

				<div className="container mx-auto w-50">
					{polls.map((element) => (
						<Poll key={element.id} poll={element} />
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default AllPolls;
