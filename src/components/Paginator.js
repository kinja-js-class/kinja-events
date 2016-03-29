import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setStartDate, listenToFirebase } from '../actions'
import moment from 'moment';

export class Paginator extends Component {
	render() {
		return <div className="paginator">
			<a href="#" className="paginator-button paginator-button__prev" onClick={() => {this.props.setStartDate(this.props.startDate - 3600 * 24 )}}>
				Previous day<br />
				<em>{moment.unix(this.props.startDate - 3600 * 24).format('MM/DD')}</em>
			</a>
			<span className="paginator-currentdate">{moment.unix(this.props.startDate).format('LL')}</span>
			<a href="#" className="paginator-button paginator-button__next" onClick={() => {this.props.setStartDate(this.props.startDate + 3600 * 24 )}}>
				Next day<br />
				<em>{moment.unix(this.props.startDate + 3600 * 24).format('MM/DD')}</em>
			</a>
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
			dispatch(setStartDate(date))
			dispatch(listenToFirebase())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Paginator)
