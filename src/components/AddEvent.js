import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class AddEvent extends Component {
	render() {
		return (
			<div>
				<input type="text" ref="text" />
				<select ref="severity">
						<option value="info">info</option>
						<option value="alert">alert</option>
				</select>
				<input type="text" ref="time" />

				<button onClick={(e) => this.handleClick(e)}>
					Add
				</button>
			</div>
		)
	}

	handleClick(e) {
		const text = this.refs.text.value.trim();
		const severity = this.refs.severity.value;
		const timestamp = parseInt(moment(this.refs.time.value.trim(), 'HH:mm').format('X'), 10);
		let event = {
			text,
			severity,
			timestamp,
			completed: false
		};
		this.props.onAddClick(event);
		// cleanup
		this.refs.text.value = '';
		this.refs.time.value = '';
	}
}

AddEvent.propTypes = {
	onAddClick: PropTypes.func.isRequired
}
