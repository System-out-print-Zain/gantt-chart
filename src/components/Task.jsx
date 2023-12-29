import { useState } from "react";
import CollapsedTask from "./CollapsedTask";
import ExpandedTask from "./ExpandedTask";
import PropTypes from 'prop-types'
function Task({ task, handleTaskSubmit, handleTaskDelete, newTask, toggleAddingTask }) {
    const [editing, setEditing] = useState(newTask);

    function toggleEdit() {
        setEditing(!editing);
        if (newTask) {
            toggleAddingTask();
        }
    }

    return (
        <div>
            {editing ? <ExpandedTask task={task} handleCancel={toggleEdit} handleTaskSubmit={handleTaskSubmit} changeEditMode={toggleEdit}></ExpandedTask> :
                <CollapsedTask task={task} handleEdit={toggleEdit} handleTaskDelete={handleTaskDelete}></CollapsedTask>}
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object,
    handleTaskSubmit: PropTypes.func,
    handleTaskDelete: PropTypes.func,
    handleTaskEdit: PropTypes.func,
    toggleAddingTask: PropTypes.func,
    newTask: PropTypes.bool
}

export default Task;