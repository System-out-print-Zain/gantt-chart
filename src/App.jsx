import { useState } from 'react'
import Chart from './components/Chart'
import Tasks from './components/Tasks'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([{ name: "Example Task", startDate: new Date('2023-10-25'), endDate: new Date('2023-11-30'), id: 0 }])
  const [numTasksEver, setNumTasksEver] = useState(1);

  function addTask(startDate, endDate, name) {
    const newTaskArr = [...tasks];
    newTaskArr.push({ name: name, startDate: startDate, endDate: endDate, id: numTasksEver });
    setTasks(newTaskArr);
    setNumTasksEver(numTasksEver + 1);
  }

  function deleteTask(id) {
    const newTaskArr = [...tasks];
    const taskToDelete = newTaskArr.indexOf(tasks.filter((task) => task.id === id)[0]);
    newTaskArr.splice(taskToDelete, 1);
    setTasks(newTaskArr);
  }

  function editTask(startDate, endDate, name, id) {
    const newTaskArr = [...tasks];
    const taskToChange = tasks.filter((task) => task.id === id)[0];
    taskToChange.name = name;
    taskToChange.startDate = startDate;
    taskToChange.endDate = endDate;
    setTasks(newTaskArr);
  }

  return (
    <div id="main">
      <div id="task-area">
        <Tasks tasks={tasks} handleTaskAdd={addTask} handleTaskDelete={deleteTask} handleTaskEdit={editTask}></Tasks>
      </div>
      <div id="chart-area">
        <Chart tasks={tasks}></Chart>
      </div>
    </div >
  )
}

export default App
