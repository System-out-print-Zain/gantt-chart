import PropTypes from 'prop-types'
function CollapsedTask({ task, handleTaskDelete, handleEdit }) {
    const { name, startDate, endDate } = task;
    const startDateStr = startDate.getFullYear() + "-" + startDate.getMonth() + "-" + startDate.getDate();
    const endDateStr = endDate.getFullYear() + "-" + endDate.getMonth() + "-" + endDate.getDate();
    return (
        <div className="collapsed-task">
            <button className="delete-btn" onClick={() => handleTaskDelete(task.id)}>Delete Task</button>
            <h4 className="task-name">{name}</h4>
            <div className="dates">
                <h6 className="start-date">{startDateStr}</h6>
                <h6 className="end-date">{endDateStr}</h6>
            </div>
            <button className="edit-btn" onClick={handleEdit}>Edit Task</button>
        </div>
    )
}

CollapsedTask.propTypes = {
    task: PropTypes.object,
    handleEdit: PropTypes.func,
    handleTaskDelete: PropTypes.func
}

export default CollapsedTask;