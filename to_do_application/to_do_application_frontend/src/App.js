import React, { useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import TaskItem from "./TaskItem/TaskItem"
import Header from './Header/Header';
import AddTask from './AddTask/AddTask';
import OutstandingTasks from './OutstandingTasks/OutstandingTasks';


import './App.css';

function App() {
  const [ tasks, setTasks ] = useState([
    // { text: "Wash the car", completed: false, dueDate: "2020-06-17", id: uuidv4()},
    // { text: "Assemble garden furniture", completed: false, dueDate: "2020-06-17", id: uuidv4()},
    // { text: "Go and buy a pressure washer", completed: false, dueDate: "2020-07-11", id: uuidv4()},
    // { text: "Go through all returned YJIT homework and make the required changes", completed: false, dueDate: "2020-06-20", id:uuidv4()},
    // { text: "Pay Corporation Tax", completed: true, dueDate: "2020-05-16", id: uuidv4()},
    // { text: "Get a refund for Euro 2020 tickets", completed: true, dueDate: "2020-06-01", id: uuidv4()},

    { text: "Wash the car", completed: false, dueDate: "2020-06-17", id: uuidv4()},
    { text: "Assemble garden furniture", completed: false, dueDate: "2020-06-17", id: uuidv4()},
    { text: "Go and buy a pressure washer", completed: false, dueDate: "2020-07-11", id: uuidv4()},
    { text: "Go through all returned YJIT homework and make the required changes", completed: false, dueDate: "2020-06-20", id:uuidv4()},
    { text: "Pay Corporation Tax", completed: true, dueDate: "2020-05-16", id: uuidv4()},
    { text: "Get a refund for Euro 2020 tickets", completed: true, dueDate: "2020-06-01", id: uuidv4()},
  ])

  useEffect(() => {
    axios
    .get('https://z1al04l6b0.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then(
      (response) => {
        console.log(response.data)
        setTasks(response.data.tasks)
      }
    )
    .catch((error) => {
      // handle error
      console.log('Error fetching data', error);
      }
    )
  }, []);
  
  const activeTasks = tasks && tasks.filter(task => !task.completed);

  const completedTasks = tasks && tasks.filter(task => task.completed);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = true
      }
      return task;
    })

    setTasks(updatedTasks);
  }

    function addTask(text, dueDate) {

      const newTask =  { 
        text: text, 
        completed: false, 
        dueDate: dueDate, 
        id: uuidv4()
      }

      const updatedTasks = [ ...tasks, newTask ]

      setTasks(updatedTasks);

    }

  return (
    <div className="App">
      <br/>
      <Header/>
      <br/>
      <AddTask addTask={ addTask }/>
      <br/>
      { tasks && 
        <Fragment>
          <div className="task-list">
        { activeTasks.map(task => {
        return <TaskItem 
          completeTask={ completeTask }
          deleteTask={ deleteTask } 
          id= {task.taskId} 
          key= {task.id} 
          text={task.text} 
          completed={task.completed} 
          dueDate={task.dueDate}/>})}
        </div>
        <h5>Completed Tasks</h5>
        <div className="completed-tasks">
        { completedTasks.map(task => {
          return <TaskItem  
          deleteTask={ deleteTask } 
          id= {task.id} 
          key= {task.taskId} 
          text={task.text} 
          completed={task.completed} 
          dueDate={task.dueDate}/>})}  
        </div>
        <br/>
        <OutstandingTasks count={ activeTasks.length }/> 
        </Fragment>
      }
    </div>

  );
}

export default App;
