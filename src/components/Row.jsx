import PropTypes from 'prop-types'
import '../styles/Row.css';
import { getDaysBetween } from '../utils/dateUtils';
function Row({ task }) {
    const { name, startDate, endDate } = task;
    const chartWidth = 150 * 12;
    const total = 30 * 12 + 5;

    const startDay = startDate.getMonth() * 30 + startDate.getDate();
    const endDay = endDate.getMonth() * 30 + endDate.getDate();

    const pixelOffset = (startDay / total) * chartWidth;
    const daysBetween = getDaysBetween(endDate, startDate);

    const percentWidth = Math.ceil(((endDay - startDay) / total) * 100);

    const bar = <div style={{ height: "60%", width: percentWidth.toString() + '%', position: "relative", left: pixelOffset + 'px', top: '20%' }} className="bar"></div>;


    return (
        <div className="row">
            <div className="task-name-section">{name}</div>
            <div className="duration">{daysBetween} days</div>
            <div className="bar-container">{bar}</div>
        </div>
    )
}

Row.propTypes = {
    task: PropTypes.object,
    index: PropTypes.number
}

export default Row;