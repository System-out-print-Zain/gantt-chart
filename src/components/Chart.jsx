import MonthHeader from "./MonthHeader";
import Row from "./Row";
import PropTypes from 'prop-types'
import '../styles/Chart.css'
function Chart({ tasks }) {
    const lstRows = tasks.map((task) =>
        <Row key={task.id} task={task}></Row>
    );
    return (
        <div className="chart">
            <MonthHeader></MonthHeader>
            {lstRows}
        </div>
    )
}

Chart.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
}

export default Chart;