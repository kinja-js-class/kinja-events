import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setStartDate, listenToFirebase } from '../actions'

export class Paginator extends Component {
	render() {
		return <div>
			<a href="#" onClick={() => {this.props.setStartDate(Math.floor(this.props.startDate - 3600 * 24 ))}}>prev</a> |
			<a href="#" onClick={() => {this.props.setStartDate(Math.floor(this.props.startDate + 3600 * 24 ))}}>next</a>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		startDate: state.paginator.startDate
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setStartDate: (date) => {
			console.log('setstartdate');
			dispatch(setStartDate(date))
			dispatch(listenToFirebase())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Paginator)
