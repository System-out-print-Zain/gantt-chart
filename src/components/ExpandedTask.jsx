import PropTypes from 'prop-types'
import { useState } from "react";
import { prodString } from '../utils/dateUtils';
import '../styles/ExpandedTask.css'
function ExpandedTask({ task, handleCancel, handleTaskSubmit, changeEditMode }) {
    const { name, startDate, endDate, id } = task;
    const [nameInput, setNameInput] = useState(name);
    const [startDateInput, setStartDateInput] = useState(startDate);
    const [endDateInput, setEndDateInput] = useState(endDate);

    const startDateStr = prodString(startDateInput);
    const endDateStr = prodString(endDateInput);

    const submitTask = (e) => {
        e.preventDefault();
        handleTaskSubmit(startDateInput, endDateInput, nameInput, id);
        changeEditMode();
    }

    return (
        <form className="expanded-task" onSubmit={submitTask}>
            <button className="cancel-btn" onClick={handleCancel}>X</button>
            <div className="task-name-entry">
                <label htmlFor="task-name-field">Task Name: </label>
                <input className="task-name-field" type="text" defaultValue={nameInput} onChange={(e) => setNameInput(e.target.value)} required />
            </div>
            <div className="dates">
                <div className="start-date">
                    <label htmlFor="start-date-field">Start Date: </label>
                    <input className="start-date-field" type="date" defaultValue={startDateStr} onChange={(e) => setStartDateInput(new Date(e.target.value))} required />
                </div>
                <div className="end-date">
                    <label htmlFor="end-date-field">End Date: </label>
                    <input className="end-date-field" type="date" defaultValue={endDateStr} onChange={(e) => setEndDateInput(new Date(e.target.value))} required />
                </div>
            </div>
            <div className="submit-btn-container">
                <input className="submit-btn" type="submit" />
            </div>
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