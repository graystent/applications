import React, { useState }from 'react';

import './AddTask.css';

function AddTask(props) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleTextChange(event){
    setText(event.target.value)
    console.log(event.target.value)
  }

  function handleDateChange(event) {
      setDueDate(event.target.value)
  }

  function handleAddTaskClick() {
      props.addTask(text, dueDate)

  }

  return (
        <div className="container input-task-area">
            <div className="row">
                <div className="input-bar col-7 col-md-8">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="So what do you need to do?"
                    onChange={ handleTextChange }
                    value={ text }/>
                </div>
                <div className="col-3 col-md-3 calendar">
                        <input 
                        type="date" 
                        className="form-control add-task__input-field add-task--date"
                        onChange={ handleDateChange }
                        value={ dueDate }/>
                </div>
                <div className="col-2 col-md-1 add-task-button">
                        <button type="button" 
                        className="btn btn-outline-secondary"
                        onClick={ handleAddTaskClick }>Add</button>
                </div>
            </div>  
        </div>

  );
}

export default AddTask; 