import React from "react";

import { Link } from "react-router-dom";

function VolunteerHeader() {
  return (
    <nav className="d-flex flex-row-reverse p-3">
      <Link to="/sign-in" className="nav-link">
        Log Out
      </Link>
      <a href="#" className="nav-link ">
        <i className="fas fa-user mr-2"></i>Welcome John
      </a>
    </nav>
  );
}

export default VolunteerHeader;
