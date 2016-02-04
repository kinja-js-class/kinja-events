import React, { Component, PropTypes } from 'react'
import Event from './Event'
import TimelineItem from './TimelineItem'
import moment from 'moment'

const incrementBy = 30 * 60
let formatTime = (timestamp) => moment(timestamp, 'X').format('HH:mm')

export default class EventStream extends Component {

    render() {

        const baseDate = parseInt(moment('00:00', 'HH:mm').format('X'), 10) + (this.props.startHour * 60 * 60)

        const rows = (this.props.endHour - this.props.startHour) * 2

        const baseList = Array.from({length: rows}, (x, i) => {
            let start = baseDate + (i * incrementBy)
            return {
                start: start,
                end: start + incrementBy - 1
            }
        })

        let eventsFilter = (timestampStart, timestampEnd) => {
            return (e) => (e.timestamp >= timestampStart && e.timestamp < timestampEnd)
        }

        return (
            <ul className="timeline">
                {baseList.map((line, index) =>
                    <li key={index}>
                        <div className="timeline__time">{formatTime(line.start)}</div>
                        <div className="timeline__events">
                            {this.props.events
                                .filter(eventsFilter(line.start, line.end))
                                .sort((a, b) => { return a.timestamp - b.timestamp })
                                .map((event, eventindex, events) =>
                                    <TimelineItem {...event}
                                          key={eventindex}
                                          widthPercentage={100 / events.length}
                                          onClick={() => this.props.onEventClick(event)} />
                            )}
                        </div>
                    </li>
                )}
            </ul>
        )
    }
}

EventStream.propTypes = {
    onEventClick: PropTypes.func.isRequired,
    startHour: PropTypes.number.isRequired,
    endHour: PropTypes.number.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        timestamp: PropTypes.number,
        completed: PropTypes.bool.isRequired,
        severity: PropTypes.oneOf(['alert', 'info'])
    }).isRequired).isRequired
}
