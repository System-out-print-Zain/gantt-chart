import PropTypes from 'prop-types'
import { useState } from "react";
function ExpandedTask({ task, handleCancel, handleTaskSubmit, changeEditMode }) {
    const { name, startDate, endDate, id } = task;
    const [nameInput, setNameInput] = useState(name);
    const [startDateInput, setStartDateInput] = useState(startDate);
    const [endDateInput, setEndDateInput] = useState(endDate);

    const startDateStr = startDateInput.getFullYear() + "-" + startDateInput.getMonth() + "-" + startDateInput.getDate();
    const endDateStr = endDateInput.getFullYear() + "-" + endDateInput.getMonth() + "-" + endDateInput.getDate();

    const submitTask = (e) => {
        e.preventDefault();
        handleTaskSubmit(startDateInput, endDateInput, nameInput, id);
        changeEditMode();
    }

    return (
        <form className="expanded-task" onSubmit={submitTask}>
            <button className="cancel-btn" onClick={handleCancel}>X</button>
            <input className="task-name" type="text" defaultValue={nameInput} onChange={(e) => setNameInput(e.target.value)} required />
            <input className="start-date" type="date" defaultValue={startDateStr} onChange={(e) => setStartDateInput(new Date(e.target.value))} required />
            <input className="end-date" type="date" defaultValue={endDateStr} onChange={(e) => setEndDateInput(new Date(e.target.value))} required />
            <input type="submit" />
        </form>
    )
}

ExpandedTask.propTypes = {
    task: PropTypes.object,
    handleCancel: PropTypes.func,
    handleTaskSubmit: PropTypes.func,
    changeEditMode: PropTypes.func
}

export default ExpandedTask;