import React from 'react';
import './Header.css';

function Header() {
  return <header className="main-heading">
      <div className="container" id="header">
            <div className="row">
                <div className="col-12 col-md-12">
                    <h1><button type="button" className="btn btn-secondary btn-lg btn-block">Graham's To Do List</button></h1>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;