import PropTypes from 'prop-types'
import { prodString } from '../utils/dateUtils';
function CollapsedTask({ task, handleTaskDelete, handleEdit, index }) {
    const { name, startDate, endDate } = task;
    const startDateStr = prodString(startDate);
    const endDateStr = prodString(endDate);
    return (
        <div className="collapsed-task">
            <h4 className="task-name"><span className="index">{index}</span> {name}</h4>
            <h6 className="dates">{startDateStr} to {endDateStr}</h6>
            <button className="edit-btn" onClick={handleEdit}>Edit Task</button>
            <button className="delete-btn" onClick={() => handleTaskDelete(task.id)}>Delete Task</button>
        </div>
    )
}

CollapsedTask.propTypes = {
    task: PropTypes.object,
    handleEdit: PropTypes.func,
    handleTaskDelete: PropTypes.func,
    index: PropTypes.number
}

export default CollapsedTask;