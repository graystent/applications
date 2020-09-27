import React from 'react';

import './OutstandingTasks.css';

function OutstandingTasks(props) {
  return (

    <div className="container">    
        <div className="row">
            <div className="col-12 col-md-12">
                <h2><button type="button" className="btn btn-info btn-lg btn-block">Outstanding Tasks: {props.count}</button></h2>
            </div>
        </div>
    </div>

    );
}

export default OutstandingTasks;   