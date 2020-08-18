import React from "react";
import PropTypes, { element } from "prop-types";

class Poll extends React.Component {
	state = {
		showVotes: false,
		voteCount: null,
		errorMsg: "",
	};

	componentDidMount() {
		this.fetchVotesCountAndBallot();
	}

	voteAndDisplayVoteCounts = (i) => {
		let vote = { option: i, poll_id: this.props.poll.id };
		let api = "/vote";

		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
			},
			body: JSON.stringify({ vote }),
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ voteCount: data.voteCount, errorMsg: data.message });
			});

		this.setState({ showVotes: true });
	};

	fetchVotesCountAndBallot = () => {
		// show only those polls votes, that have been voted by User
		let api = "/vote";

		fetch(api, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data, "fetchVotesCountAndBallot");
				// this.setState({ voteCount: data.vote, errorMsg: data.message });
			});
	};

	render() {
		let poll = this.props.poll;
		return (
			<React.Fragment>
				<div style={{ border: "1px solid red" }}>
					{this.state.errorMsg ? <p>{this.state.errorMsg}</p> : null}
					<h1>{poll.question}</h1>
					<div className="options">
						{poll.options.map((option, i) => {
							return (
								<>
									<button
										key={i}
										onClick={() => this.voteAndDisplayVoteCounts(i)}
									>
										{option}
									</button>
									<br />
									{this.state.voteCount ? (
										<p>{this.state.voteCount[`option_${i + 1}`]}</p>
									) : null}
								</>
							);
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Poll;
