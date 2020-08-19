import React from "react";
import PropTypes from "prop-types";

class NewPoll extends React.Component {
	state = {
		question: "",
		option1: "",
		option2: "",
		option3: "",
		option4: "",
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const api = "/polls";
		const poll = {};

		poll.options = [
			this.state.option1,
			this.state.option2,
			this.state.option3,
			this.state.option4,
		];
		poll.question = this.state.question;

		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
			},
			body: JSON.stringify({ poll }),
		}).then((response) => (window.location.href = "/polls"));
	};

	render() {
		return (
			<React.Fragment>
				<h1>New Poll from React</h1>
				<form>
					<label htmlFor="question">
						Question:
						<br />
						<input
							type="text"
							name="question"
							onChange={(e) => this.handleChange(e)}
							value={this.state.question}
						/>
					</label>

					<div className="options">
						<label htmlFor="option1">
							Option 1:
							<input
								type="text"
								name="option1"
								onChange={(e) => this.handleChange(e)}
								value={this.state.option1}
							/>
						</label>

						<label htmlFor="option2">
							Option 2:
							<input
								type="text"
								name="option2"
								onChange={(e) => this.handleChange(e)}
								value={this.state.option2}
							/>
						</label>

						<label htmlFor="option3">
							Option 3:
							<input
								type="text"
								name="option3"
								onChange={(e) => this.handleChange(e)}
								value={this.state.option3}
							/>
						</label>

						<label htmlFor="option4">
							Option 4:
							<input
								type="text"
								name="option4"
								onChange={(e) => this.handleChange(e)}
								value={this.state.option4}
							/>
						</label>
					</div>
					<button
						type="button"
						class="btn btn-primary"
						onClick={this.handleSubmit}
					>
						Submit
					</button>
				</form>
			</React.Fragment>
		);
	}
}

export default NewPoll;
