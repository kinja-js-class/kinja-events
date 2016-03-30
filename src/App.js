import React, { Component } from 'react'

import AddCustomEvent from './containers/AddCustomEvent'
import VisibleEventStream from './containers/VisibleEventStream'
import VisibleEventTimeline from './containers/VisibleEventTimeline'
import Paginator from './components/Paginator'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="topbar">
					<Paginator />
					<AddCustomEvent />
				</div>
				<VisibleEventTimeline />
				<VisibleEventStream />
			</div>
		)
	}
}

export default App
