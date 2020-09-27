import React, { Fragment }from 'react';
import './TaskItem.css';

function TaskItem(props) {

    function handleDeleteClick() {
        props.deleteTask(props.id);
    }

    function handleCompleteClick() {
        console.log(props.id)
        props.completeTask(props.id)
    }


    return (
            <Fragment>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-2">
                                { !props.completed && <button className="task-item__done-button btn btn-outline-success" type="button" onClick= { handleCompleteClick }>Complete</button>}
                            </div>

                            <div className={`col-6 text ${ props.completed ? 'task--complete' : 'task--active'}`}>
                                <span className="task-item__text">{ props.text }</span>
                            </div>

                            <div className="col-2 date">
                                <span className="task-item__due-date">{ props.dueDate }</span>
                            </div>

                            <div className="col-2">
                                <button className="task-item__delete-button btn btn-outline-danger" type="button" onClick={ handleDeleteClick }>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </Fragment>
        );
}

export default TaskItem;    
