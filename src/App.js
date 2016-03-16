import React, { Component } from 'react'
import VisibleEventStream from './containers/VisibleEventStream'
import AddCustomEvent from './containers/AddCustomEvent'

export default class App extends Component {
	render() {
		return (
			<div>
				<AddCustomEvent />
				<VisibleEventStream />
			</div>
		)
	}
}

export default App
