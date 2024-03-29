import Task from './Task'
import PropTypes from 'prop-types'
import { useState } from 'react'
import '../styles/Tasks.css'
function Tasks({ tasks, handleTaskAdd, handleTaskDelete, handleTaskEdit }) {
    const [addingTask, setAddingTask] = useState(false);

    function toggleAdding() {
        setAddingTask(!addingTask);
    }

    const emptyTask = { name: '', startDate: new Date(), endDate: new Date() };
    const lstTasks = tasks.map((task) =>
        <Task key={task.id} task={task} handleTaskSubmit={handleTaskEdit} handleTaskDelete={handleTaskDelete} newTask={false} toggleAddingTask={toggleAdding} index={tasks.indexOf(task) + 1}></Task>
    );

    return (
        <div className="tasks">
            {lstTasks}
            {addingTask ?
                <Task task={emptyTask} handleTaskSubmit={handleTaskAdd} handleTaskDelete={handleTaskDelete} newTask={true} toggleAddingTask={toggleAdding}></Task> :
                <button className="add-new" onClick={() => { setAddingTask(true); }}>Add Task</button>
            }
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    handleTaskAdd: PropTypes.func,
    handleTaskDelete: PropTypes.func,
    handleTaskEdit: PropTypes.func
}

export default Tasks;