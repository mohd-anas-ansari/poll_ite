import React from "react";
import PropTypes from "prop-types";

class NewPoll extends React.Component {
	state = {
		question: "",
	};

	handleChange = (e) => {
		this.setState({ question: e.target.value });
	};

  handleSubmit = (e) => {
    e.preventDefault()
    const api = "/polls"
    const poll = this.state;
		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
			},
			body: JSON.stringify({ poll }),
		})
			.then((response) => window.location.href="/polls")
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
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
			</React.Fragment>
		);
	}
}

export default NewPoll;
