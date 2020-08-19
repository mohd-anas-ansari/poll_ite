import React from "react";
import PropTypes, { element } from "prop-types";

class Poll extends React.Component {
	state = {
		showVotes: false,
		voteCount: null,
		errorMsg: "",
		ballot: null,
	};

	componentDidMount() {
		this.fetchVoteCountAndUserBallot(this.props.poll.id);
	}

	vote = (i) => {
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

	fetchVoteCountAndUserBallot = (id) => {
		// show only those polls votes, that have been voted by User
		let api = `/vote/${id}`;

		fetch(api, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
			},
		})
			.then((response) => response.json())
			.then((ballotAndCount) => {
				console.log(ballotAndCount, "fetchVotesCountAndUserBallot");
				this.setState({
					voteCount: ballotAndCount[1],
					ballot: ballotAndCount[0],
				});
			});
	};

	showButton = (i, option) => {
		return (
			<button
				type="button"
				class="btn btn-primary"
				key={i}
				onClick={() => this.vote(i)}
			>
				{option}
			</button>
		);
	};

	showDisabledButtonWithCount = (i, option) => {
		return (
			<div key={i}>
				<button class="btn btn-primary" disabled>{option}</button>
				<p>{this.state.voteCount[`option_${i + 1}`]}</p>
			</div>
		);
	};

	render() {
		let poll = this.props.poll;
		return (
			<React.Fragment>
				<div style={{ border: "1px solid red" }}>
					{this.state.errorMsg ? <p>{this.state.errorMsg}</p> : null}

					<h1>{poll.question}</h1>

					<div className="options">
						{poll.options.map((option, i) =>
							this.state.voteCount
								? this.showDisabledButtonWithCount(i, option)
								: this.showButton(i, option)
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Poll;
