import React, { Component, PropTypes } from 'react'

export default class AddEvent extends Component {
	render() {
		return (
			<div>
				<input type="text" ref="text" />
				<select ref="severity">
						<option value="info">info</option>
						<option value="alert">alert</option>
				</select>
				<input type="time" ref="time" />

				<button onClick={event => this.handleClick(event)}>
					Add
				</button>
			</div>
		)
	}

	handleClick() {
		const text = this.refs.text.value.trim()
		const severity = this.refs.severity.value
		const timestamp = parseInt(this.refs.time.value.trim(), 10)

		this.props.addEvent({
			text,
			severity,
			timestamp
		})

		// cleanup
		this.refs.text.value = '';
		this.refs.time.value = '';
	}
}

AddEvent.propTypes = {
	addEvent: PropTypes.func.isRequired
}
