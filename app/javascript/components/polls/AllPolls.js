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

				{polls.map((element) => (
					<Poll key={element.id} poll={element} />
				))}
			</React.Fragment>
		);
	}
}

export default AllPolls;
